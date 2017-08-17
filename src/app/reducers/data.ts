import { Action } from '@ngrx/store';
import * as dataModel from '../models/data';
import * as data from '../actions/data';
import { merge, without, clone, trim } from 'lodash';


export function reducer(state = dataModel.defaults, action: Action): dataModel.Data {
  let stateCopy = clone(state);
  switch (action.type) {
    case data.ActionTypes.ADD:
      return merge({}, state, {cards: [ ...state.cards, {text: trim(action.payload)} ]});
    case data.ActionTypes.UPDATE:
      stateCopy.cards = without(state.cards, action.payload);
      stateCopy.cards.push(action.payload);
      return merge({}, stateCopy);
    case data.ActionTypes.REMOVE:
      stateCopy.cards = [];
      return merge({}, stateCopy);
    default:
      return state;
  }
}

export const getCards = (state: dataModel.Data) => state.cards;
