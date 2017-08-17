import { Action } from '@ngrx/store';
import * as dataModel from '../models/data';
import * as data from '../actions/data';
import { merge, without, clone } from 'lodash';


export function reducer(state = dataModel.defaults, action: Action): dataModel.Data {
  switch (action.type) {
    case data.ActionTypes.ADD:
      return merge({}, state, {cards: [ ...state.cards, action.payload ]});
    case data.ActionTypes.REMOVE:
      let stateCopy = clone(state);
      stateCopy.cards = [];
      return merge({}, stateCopy.cards, {cards: without(state.cards, action.payload)});
    default:
      return state;
  }
}

export const getCards = (state: dataModel.Data) => state.cards;
