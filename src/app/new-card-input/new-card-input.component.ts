import {Component, EventEmitter, HostBinding, HostListener, OnInit, Output, OnDestroy} from '@angular/core';
import {card} from '../models/card';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {dummyValidator} from '../shared/dummy.validator';


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

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': [null, Validators.compose([Validators.required, Validators.minLength(2), dummyValidator])],
    });

    this.newCardForm.valueChanges
      .filter((value) => this.newCardForm.valid)
      .debounceTime(1000)
      .takeWhile(() => this.alive)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
    // this.newCardForm.reset();
  }
}
