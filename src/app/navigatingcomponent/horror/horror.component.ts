import { Component } from '@angular/core';
import { HorrorService } from '../service/horror.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent {
   images:any;
        constructor(private service:HorrorService){}
          ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
          }
}
