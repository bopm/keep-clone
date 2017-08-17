import { Action } from '@ngrx/store';
import { type } from '../util';
import {card} from '../models/card';

export const ActionTypes = {
  ADD: type('[Data] Add Card'),
  REMOVE: type('[Data] Remove Card'),
  TOGGLE_PINNED: type('[Data] Toggle Pinned Card'),
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: string) { }
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: card) { }
}

export class TogglePinnedAction implements Action {
  type = ActionTypes.TOGGLE_PINNED;

  constructor(public payload: card) { }
}

export type Actions
  = AddAction
  | RemoveAction
  | TogglePinnedAction;
