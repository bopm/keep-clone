import {Ng2StateDeclaration} from '@uirouter/angular';
import {CardsComponent} from './cards.component';
import {DataService} from "../services/data.service";

export function loadCards(transition) {
  let dataSvc = transition.injector().get(DataService);

  dataSvc.dispatchLoad();
}

export let CARDS_STATES: Ng2StateDeclaration[] = [
  {
    name: 'cards',
    url: '/',
    component: CardsComponent,
    onEnter: loadCards
  },
];
