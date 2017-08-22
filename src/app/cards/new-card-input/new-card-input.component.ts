import {Component, EventEmitter, HostBinding, HostListener, OnInit, Output, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as data from '../../actions/data';

@Component({
  selector: 'app-new-card-input',
  template: `
    <div class="card">
      <div class="card-block">
        <input placeholder="Take a note..." class="form-control" name="text" [formControl]="newCardForm.controls['text']">
      </div>
    </div>
  `,
  styles: [
    '.card { margin-bottom: 1.5rem; }',
  ],
})
export class NewCardInputComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = 'col-8';
  @Output() onCardAdd = new EventEmitter<string>();
  newCardForm: FormGroup;
  private alive = true;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.charCode === 13 && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  constructor(private store: Store<fromRoot.State>, fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  addCard(text) {
    this.store.dispatch(new data.AddAction(text));
    this.newCardForm.controls['text'].setValue('');
    // this.newCardForm.reset();
  }
}
