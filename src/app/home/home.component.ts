import { Component, OnDestroy, OnInit } from '@angular/core';
import { Options } from '../option.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsInHomePage: any
  nkr = "http://apiorbitex.somee.com/news/pictures/132975903836802556.png";
  nkr1 = "https://apiorbitex.somee.com/news/pictures/132975902779536968.png";
  nkr2 = "https://apiorbitex.somee.com/news/pictures/132975899760121812.png";
  countInfo = {
    segmentsElementCount: 3,
    startId: 0
  };
  constructor(private service: Options) {
  }

  getNews() {
    this.service.getThreeActiveNews(this.countInfo).subscribe(info => {
      this.newsInHomePage = info;
      console.log(this.newsInHomePage);

    })
  }

  ngOnInit(): void {
    this.getNews();
  }

}
