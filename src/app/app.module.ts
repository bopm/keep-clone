import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {reducer} from './reducers/index';
import {StoreModule} from '@ngrx/store';
import { ColorInputComponent } from './color-input/color-input.component';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {DataEffects} from './effects/data';
import {DataService} from './services/data.service';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UIRouterModule } from '@uirouter/angular';
import { MAIN_STATES, uiRouterConfigFn } from './app.states';
import {AboutComponent} from './about/about';

@NgModule({
  declarations: [
    AppComponent,
    ColorInputComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(DataEffects),
    ToasterModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      useHash: true,
      config: uiRouterConfigFn
    }),
  ],
  providers: [
    DataService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
