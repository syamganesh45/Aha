import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingNow } from '../models/trending-now';

@Injectable({
  providedIn: 'root'
})
export class TrendingNowService {
   private baseurl = "";
  constructor(private http:HttpClient) { }
   onsubmit():Observable<TrendingNow[]>{
      return this.http.get<TrendingNow[]>(this.baseurl);
    }
}
