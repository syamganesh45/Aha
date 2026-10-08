import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thriller } from '../models/thriller';

@Injectable({
  providedIn: 'root'
})
export class ThrillerService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
   onsubmit():Observable<[Thriller]>{
          return this.http.get<[Thriller]>(this.baseurl);
        }
}
