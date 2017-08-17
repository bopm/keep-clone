import { Action } from '@ngrx/store';
import { type } from '../util';
import {card} from '../models/card';

export const ActionTypes = {
  ADD: type('[Data] Add Card'),
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: card) { }
}

export type Actions
  = AddAction;
