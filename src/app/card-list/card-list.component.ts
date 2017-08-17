import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { filter } from 'lodash';
import { card } from '../models/card';
import * as fromRoot from '../reducers';
import 'rxjs/add/operator/takeWhile';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-card-list',
  template: `
    <div class="container-fluid text-center pb-5" *ngIf="anyPinned()">
      <div class="row"><p class="h6 col-2">Pinned</p></div>
      <div class="row">
        <app-card *ngFor="let card of getPinned(cards)" [card]="card"></app-card>
      </div>
    </div>
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <p class="h6 col-2" *ngIf="anyPinned()">Others</p>
      </div>
      <div class="row">
        <app-card *ngFor="let card of getPinned(cards, false)" [card]="card"></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit, OnDestroy {
  public cards: Array<card> = [];
  private alive: boolean = true;

  constructor(private store: Store<fromRoot.State>) {
    this.store.select(fromRoot.getCards).takeWhile(() => this.alive).subscribe(val => {
      this.cards = val;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getPinned(cards, pinned = true) {
    return filter(cards, (card: card) => pinned ? card.pinned === true : card.pinned  !== true );
  }

  anyPinned() {
    return this.getPinned(this.cards).length > 0;
  }

}
