import { Action } from '@ngrx/store';
import * as dataModel from '../models/data';
import * as data from '../actions/data';
import { merge } from 'lodash';


export function reducer(state = dataModel.defaults, action: Action): dataModel.Data {
  switch (action.type) {
    case data.ActionTypes.ADD:
      // return merge({}, state, {cards: state.cards.push(action.payload.data)}); <- this will fail.
      return merge({}, state, {cards: [ ...state.cards, action.payload ]});
    default:
      return state;
  }
}

export const getCards = (state: dataModel.Data) => state.cards;
