import { Action } from '@ngrx/store';
import { type } from '../util';
import {card} from '../models/card';

export const ActionTypes = {
  ADD: type('[Data] Add Card'),
  REMOVE: type('[Data] Remove Card'),
  REMOVE_SUCCESS: type('[Data] Server Remove Success Card'),
  TOGGLE_PINNED: type('[Data] Toggle Pinned Card'),
  UPDATE: type('[Data] Update Card'),
  UPDATE_SUCCESS: type('[Data] Server Update Success'),
  SERVER_ADD_SUCCESS: type('[Data] Server Add Card Successful'),
  SERVER_FAIL: type('[Data] Server Failure'),
  REFRESH_TOKEN: type('[Data] Refresh Token'),
  REFRESH_TOKEN_SUCCESS: type('[Data] Refresh Token Success'),
  REFRESH_TOKEN_FAIL: type('[Data] Refresh Token Fail'),
};

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: string) { }
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: card) { }
}

export class RemoveSuccessAction implements Action {
  type = ActionTypes.REMOVE_SUCCESS;

  constructor(public payload: card) { }
}

export class TogglePinnedAction implements Action {
  type = ActionTypes.TOGGLE_PINNED;

  constructor(public payload: card) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: any) { }
}

export class UpdateSuccessAction implements Action {
  type = ActionTypes.UPDATE_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerAddSuccessAction implements Action {
  type = ActionTypes.SERVER_ADD_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerFailAction implements Action {
  type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export class RefreshTokenAction implements Action {
  type = ActionTypes.REFRESH_TOKEN;
}
export class RefreshTokenSuccessAction implements Action {
  type = ActionTypes.REFRESH_TOKEN_SUCCESS;

  constructor(public payload: any) { }
}
export class RefreshTokenFailAction implements Action {
  type = ActionTypes.REFRESH_TOKEN_FAIL;
}

export type Actions
  = AddAction
  | RemoveAction
  | RemoveSuccessAction
  | TogglePinnedAction
  | UpdateAction
  | UpdateSuccessAction
  | ServerAddSuccessAction
  | ServerFailAction
  | RefreshTokenAction
  | RefreshTokenSuccessAction
  | RefreshTokenFailAction;
