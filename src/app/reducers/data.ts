import { Action } from '@ngrx/store';
import * as dataModel from '../models/data';
import * as data from '../actions/data';
import { merge, without, clone, find } from 'lodash';


export function reducer(state = dataModel.defaults, action: Action): dataModel.Data {
  let stateCopy = clone(state);
  switch (action.type) {
    case data.ActionTypes.LOAD_SUCCESS:
      return merge({}, state, {cards: action.payload});
    case data.ActionTypes.SERVER_ADD_SUCCESS:
      return merge({}, state, {cards: [ ...state.cards, action.payload ]});
    case data.ActionTypes.UPDATE_SUCCESS:
      stateCopy.cards = without(state.cards, find(state.cards, (card) => card.id === action.payload.id));
      stateCopy.cards.push(action.payload);
      return merge({}, stateCopy);
    case data.ActionTypes.REMOVE_SUCCESS:
      stateCopy.cards = without(state.cards, action.payload);
      return merge({}, stateCopy);
    default:
      return state;
  }
}

export const getCards = (state: dataModel.Data) => state.cards;
