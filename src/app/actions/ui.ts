import { Action } from '@ngrx/store';
import { type } from '../util';
import {card} from '../models/card';

export const ActionTypes = {
  SET_TOOLBAR_COLOR: type('[UI] Add Card'),
};

export class SetToolbarColorAction implements Action {
  readonly type = ActionTypes.SET_TOOLBAR_COLOR;

  constructor(public payload: string) { }
}

export type Actions
  = SetToolbarColorAction;
