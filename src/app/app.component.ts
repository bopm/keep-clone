import { Component } from '@angular/core';
import { card } from './models/card';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <a class="navbar-brand" href="#">Keep Clone</a>
    </nav>
    <div class="container-fluid text-center pb-5">
      <div class="row justify-content-end">
        <app-new-card-input></app-new-card-input>
      </div>
    </div>
    <app-card-list></app-card-list>
  `,
  styles: [],
})
export class AppComponent {
}
