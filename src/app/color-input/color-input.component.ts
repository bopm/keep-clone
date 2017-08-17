import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui';

@Component({
  selector: 'app-color-input',
  template: `
    <input placeholder="Color, please" class="form-control" name="text" [formControl]="colorForm.controls['color']">
  `,
  styles: []
})
export class ColorInputComponent implements OnInit {
  // No need to alive here, we don't subscribe.
  colorForm: FormGroup;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.charCode === 13 && this.colorForm.valid) {
      this.store.dispatch(new ui.SetToolbarColorAction(this.colorForm.controls['color'].value));
    }
  }

  constructor(private store: Store<fromRoot.State>, fb: FormBuilder) {
    this.colorForm = fb.group({
      'color': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }

  ngOnInit() {
  }

}
