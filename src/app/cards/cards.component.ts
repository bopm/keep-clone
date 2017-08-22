import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row justify-content-end">
        <app-new-card-input></app-new-card-input>
      </div>
    </div>
    <app-card-list></app-card-list>
  `,
  styles: [],
})
export class CardsComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  constructor() {
  }
}


