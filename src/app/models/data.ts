import {card} from './card';

export interface Data {
  cards: Array<card>;
}

export const defaults: Data = {
  cards: []
};
