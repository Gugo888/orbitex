import { Component, OnDestroy, OnInit} from '@angular/core';
import { Options } from './option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langue!:any
  constructor(private optionService: Options ) {
 
  }
  ngOnInit(): void {

  }
 
  f() {
    this.optionService.getLange().subscribe(info => {
      this.langue = info;
      for(let key of this.langue) {
        console.log(key);
        
      }
    }) 
  }

}
