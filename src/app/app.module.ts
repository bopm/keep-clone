import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {reducer} from "./reducers/index";
import {StoreModule} from "@ngrx/store";
import { ColorInputComponent } from './color-input/color-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    ColorInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
