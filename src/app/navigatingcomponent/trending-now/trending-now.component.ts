import { Component } from '@angular/core';
import { TrendingNowService } from '../service/trending-now.service';

@Component({
  selector: 'app-trending-now',
  templateUrl: './trending-now.component.html',
  styleUrls: ['./trending-now.component.css']
})
export class TrendingNowComponent {
  images:any;
    constructor(private service:TrendingNowService){}
      ngOnInit(){
        this.service.onsubmit().subscribe(data=>this.images=data);
      }
}
