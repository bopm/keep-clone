import {Component, OnInit, OnDestroy} from '@angular/core';
import * as fromRoot from '../reducers';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as data from '../actions/data';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="container-fluid text-center pb-5" *ngIf="anyPinned$ | async">
      <div class="row"><p class="h6 col-2">Pinned</p></div>
      <div class="row">
        <app-card *ngFor="let card of getPinned() | async" [card]="card" (onRemove)="removeCard($event)"></app-card>
      </div>
    </div>
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <p class="h6 col-2" *ngIf="anyPinned$ | async">Others</p>
      </div>
      <div class="row">
        <app-card *ngFor="let card of getPinned(false) | async" [card]="card" (onRemove)="removeCard($event)"></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit, OnDestroy {
  public anyPinned$: Observable<boolean>;
  private alive = true;

  constructor(private store: Store<fromRoot.State>) {
    this.anyPinned$ = this.getPinned().takeWhile(() => this.alive).map((cards) => cards.length > 0);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getPinned(pinned = true) {
    return this.store.select(fromRoot.getCards)
      .takeWhile(() => this.alive)
      .map((cardArr) => cardArr.filter(card => pinned ? card.pinned === true : card.pinned  !== true));
  }

  removeCard(card) {
    this.store.dispatch(new data.RemoveAction(card));
  }
}
