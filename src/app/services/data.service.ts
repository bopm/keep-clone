import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { trim } from 'lodash';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  add(payload) {
    return this.http.post(`/api/v1/cards.json`, {text: trim(payload)});
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
