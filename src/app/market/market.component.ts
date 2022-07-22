import { Component, OnInit } from '@angular/core';
import { Options } from '../option.service';
import { take } from 'rxjs'

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  newsInMarketPage: any;
  arr: any = [];
  url = '/assets/bololex/';
  png = '.png';
  btn1: any = true;
  btn2: any = false;
  btn3: any = false;
  btn4: any = false;


  constructor(private OptionServive: Options) { }

  getMarket() {
    this.OptionServive.getAllTradeSymbol().subscribe((market) => {
      this.newsInMarketPage = market;
      for (let i = 0; i < 12; i++) {
        this.arr.push(this.newsInMarketPage.result[i]);
      }
    })
  }

  all() {
    this.arr = this.newsInMarketPage.result
    this.btn1 = true;
    this.btn2 = false;
    this.btn3 = false;
    this.btn4 = false;
  }
  usdt() {
    this.btn1 = false;
    this.btn2 = false;
    this.btn3 = false;
    this.btn4 = true;
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'USDT'
    });
  }
  eth() {
    this.btn1 = false;
    this.btn2 = false;
    this.btn3 = true;
    this.btn4 = false;
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'ETH'
    })
  }
  btc() {
    this.btn1 = false;
    this.btn2 = true;
    this.btn3 = false;
    this.btn4 = false;
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'BTC'
    })
  }

  filterWithName(typeBtc:string) {
    // this.arr = this.newsInMarketPage.result.filter((elem: any) => {
    //   return elem.quote.startsWith(typeBtc.toLocaleUpperCase())
    // })
    this.arr = this.arr.filter((elem: any) => {
      return elem.quote.startsWith(typeBtc.toLocaleUpperCase())
    })
  }
  ngOnInit(): void {
    this.getMarket()
  }

}


