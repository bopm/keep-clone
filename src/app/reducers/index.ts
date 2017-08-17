import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import { environment } from '../../environments/environment';

import * as dataModel from '../models/data';
import * as uiModel from '../models/ui';

import * as fromData from './data';
import * as fromUi from './ui';

export interface State {
  data: dataModel.Data;
  ui: uiModel.Ui;
}

const reducers = {
  data: fromData.reducer,
  ui: fromUi.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeLogger(), localStorageSync({keys: ['ui', 'data'], rehydrate: true}), storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = compose(localStorageSync({keys: ['ui', 'data'], rehydrate: true}), combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/* Data */

export const getDataState = (state: State) => state.data;

export const getCards = createSelector(getDataState, fromData.getCards);

/* Data */

export const getUiState = (state: State) => state.ui;

export const getToolbarColor = createSelector(getUiState, fromUi.getToolbarColor);
