import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Options {
  link = 'https://apiorbitex.somee.com/';

  constructor(private http:HttpClient) {}

  getLange() {
    return this.http.get(`${this.link}Languages`)
  }
}
