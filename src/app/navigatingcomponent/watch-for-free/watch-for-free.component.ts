import { Component } from '@angular/core';
import { WatchForFreeService } from '../service/watch-for-free.service';

@Component({
  selector: 'app-watch-for-free',
  templateUrl: './watch-for-free.component.html',
  styleUrls: ['./watch-for-free.component.css']
})
export class WatchForFreeComponent {
  images:any;
  constructor(private service:WatchForFreeService){}
    ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
