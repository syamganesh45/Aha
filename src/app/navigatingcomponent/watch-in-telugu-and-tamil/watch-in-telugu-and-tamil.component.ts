import { Component } from '@angular/core';
import { WatchInTeluguAndTamilService } from '../service/watch-in-telugu-and-tamil.service';

@Component({
  selector: 'app-watch-in-telugu-and-tamil',
  templateUrl: './watch-in-telugu-and-tamil.component.html',
  styleUrls: ['./watch-in-telugu-and-tamil.component.css']
})
export class WatchInTeluguAndTamilComponent {
   images:any;
    constructor(private service:WatchInTeluguAndTamilService){}
      ngOnInit(){
        this.service.onsubmit().subscribe(data=>this.images=data);
      }
}
