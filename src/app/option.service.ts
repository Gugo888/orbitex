import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ActiveNews} from '../app/type.modal'
@Injectable({
  providedIn: 'root'
})
export class Options {
  link = 'https://apiorbitex.somee.com/';

  constructor(private http:HttpClient) {}

  getLange() {
    return this.http.get(`${this.link}Languages`)
  }

  getThreeActiveNews(param:ActiveNews) {
    return this.http.post(`${this.link}news/allactive/bysegment`,param)
  }

  getFourTradeSymbol() {
    return this.http.get(`${this.link}bololextradingplatform/publicapis/tradablesymbols4`)
  }

}
