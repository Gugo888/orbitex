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
  png = '.png'
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
  }
  usdt() {
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'USDT'
    });
  }
  eth() {
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'ETH'
    })
  }
  btc() {
    this.arr = this.newsInMarketPage.result.filter((elem: any) => {
      return elem.quote === 'BTC'
    })
  }


  ngOnInit(): void {
    this.getMarket()
  }

}


