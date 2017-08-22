import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CARDS_STATES } from './cards.states';
import {CardsComponent} from './cards.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';
import {NewCardInputComponent} from './new-card-input/new-card-input.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const CARDS_COMPONENTS =  [
  CardsComponent, CardComponent, CardListComponent, NewCardInputComponent,

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({
      states: CARDS_STATES,
    }),

  ],
  declarations: CARDS_COMPONENTS
})
export class CardsModule { }
