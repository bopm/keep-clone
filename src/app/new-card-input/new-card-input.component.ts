import {Component, EventEmitter, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import {card} from '../models/card';

@Component({
  selector: 'app-new-card-input',
  template: `
    <div class="card">
      <div class="card-block">
        <input placeholder="Take a note..." class="form-control" [(ngModel)]="newCard.text">
      </div>
    </div>
  `,
  styles: [
    '.card { margin-bottom: 1.5rem; }',
  ],
})
export class NewCardInputComponent implements OnInit {
  @HostBinding('class') class = 'col-8';
  @Output() onCardAdd = new EventEmitter<string>();

  public newCard: card = {text: ''};

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.charCode === 13 && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }
}
