import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import * as data from './actions/data';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top"
         [ngClass]="{'bg-inverse': !(toolbarColor$ | async)}"
         [ngStyle]="{'background-color': toolbarColor$ | async}">
      <a class="navbar-brand" href="#">Keep Clone</a>
      <app-color-input></app-color-input>

      <a class="nav-link" uiSref="about">About</a>
      <a class="nav-link" uiSref="cards">Cards</a>
    </nav>
    <toaster-container></toaster-container>
    <ui-view></ui-view>
  `,
  styles: [],
})
export class AppComponent {
  public toolbarColor$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    // .takeWhile(() => this.alive) <- we don't care about this here, as if AppComponent going to be disposed, our app is done.
    this.toolbarColor$ = this.store.select(fromRoot.getToolbarColor);

    this.store.dispatch(new data.RefreshTokenAction({}));
  }
}
