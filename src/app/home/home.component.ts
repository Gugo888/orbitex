import { Component, OnInit } from '@angular/core';
import { Options } from '../option.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsInHomePage: any;
  marketInHomePage:any;
  countNews = {
    segmentsElementCount: 3,
    startId: 0
  };
  arr = ['gugo','gago','macak','gayan']
  constructor(private service: Options) {
  }

  getNews() {
    this.service.getThreeActiveNews(this.countNews).subscribe(news => {
      this.newsInHomePage = news;
    })
  }

  getMarket() {
    this.service.getFourTradeSymbol().subscribe(market => {
      this.marketInHomePage = market;
      console.log(this.marketInHomePage);
    })
  }

  ngOnInit(): void {
    this.getNews();
    this.getMarket();
  }

}
