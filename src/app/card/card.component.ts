import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <p class="card-text">Text</p>
      </div>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
