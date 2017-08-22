import { Ng2StateDeclaration, UIRouter } from '@uirouter/angular';
import {AboutComponent} from './about/about';
import { Injector } from '@angular/core';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.otherwise({ state: 'cards' });
}

export let MAIN_STATES: Ng2StateDeclaration[] = [
  { name: 'about', url: '/about',  component: AboutComponent },
  { name: 'cards.**',
    url: '/cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  // { name: 'user.**',
  //   url: '/user',
  //   loadChildren: './user/user.module#UserModule'
  // },
];
