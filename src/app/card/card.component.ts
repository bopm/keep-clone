import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" [checked]="card.pinned" (change)="card.pinned = !card.pinned" />
          <span class="custom-control-indicator"></span>
        </label>
        <p class="card-text">{{ card.text }}</p>
      </div>
    </div>
  `,
  styles: [
    '.card {margin-top: 1.5rem;}'
  ],
  host: {'class': 'col-2'}
})
export class CardComponent implements OnInit {
  @Input() card:any;

  constructor() { }

  ngOnInit() {
  }

}
