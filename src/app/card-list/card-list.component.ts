import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-card *ngFor="let card of cards" [card]="card"></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.cards);
  }

}
