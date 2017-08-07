import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-card class="col-4"></app-card>
        <app-card class="col-4"></app-card>
        <app-card class="col-4"></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
