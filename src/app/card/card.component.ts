import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
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
