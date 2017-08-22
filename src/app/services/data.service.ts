import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { trim } from 'lodash';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as data from '../actions/data';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

  dispatchLoad() {
    this.store.dispatch(new data.LoadAction());
  }

  add(payload) {
    return this.http.post(`/api/v1/cards.json`, {text: trim(payload)});
  }

  load() {
    return this.http.get(`/api/v1/cards.json`);
  }

  remove(payload) {
    return this.http.delete(`/api/v1/cards/${payload.id}.json`);
  }

  update(payload) {
    return this.http.patch(`/api/v1/cards/${payload.id}.json`, payload);
  }

  refreshToken() {
    return this.http.get(`/api/v1/xsrf.json`);
  }
}
