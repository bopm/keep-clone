import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    ColorInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(DataEffects),
    ToasterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
