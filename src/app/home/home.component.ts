import { Component, OnInit } from '@angular/core';
import { Options } from '../option.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsInHomePage: any;
  countNews = {
    segmentsElementCount: 3,
    startId: 0
  };
  constructor(private service: Options) {
  }

  getNews() {
    this.service.getThreeActiveNews(this.countNews).subscribe(info => {
      this.newsInHomePage = info;
    })
  }

  ngOnInit(): void {
    this.getNews();
  }

}
