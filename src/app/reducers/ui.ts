import { Action } from '@ngrx/store';
import * as uiModel from '../models/ui';
import * as ui from '../actions/ui';
import { merge } from 'lodash';


export function reducer(state = uiModel.defaults, action: Action): uiModel.Ui {
  switch (action.type) {
    case ui.ActionTypes.SET_TOOLBAR_COLOR:
      return merge({}, state, {toolbarColor: action.payload});
    default:
      return state;
  }
}

export const getToolbarColor = (state: uiModel.Ui) => state.toolbarColor;
