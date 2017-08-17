import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import { card } from '../models/card';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" [checked]="card.pinned" (change)="card.pinned = !card.pinned" />
          <span class="custom-control-indicator"></span>
        </label>
        <button type="button" class="close" aria-label="Close" (click)="removeCard()">
          <span>&times;</span>
        </button>
        <p class="card-text">{{ card.text }}</p>
      </div>
    </div>
  `,
  styles: [
    '.card {margin-top: 1.5rem;}'
  ]
})
export class CardComponent implements OnInit {
  @HostBinding('class') class = 'col-2';
  @Input() card: card;
  @Output() 'onRemove' = new EventEmitter<card>();

  constructor() { }

  ngOnInit() {
  }

  removeCard() {
    this.onRemove.emit(this.card);
  }

}
