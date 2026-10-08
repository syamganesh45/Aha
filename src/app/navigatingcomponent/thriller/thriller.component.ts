import { Component } from '@angular/core';
import { ThrillerService } from '../service/thriller.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent {
   images:any;
      constructor(private service:ThrillerService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
