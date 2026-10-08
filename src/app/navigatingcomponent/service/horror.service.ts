import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horror } from '../models/horror';

@Injectable({
  providedIn: 'root'
})
export class HorrorService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
   onsubmit():Observable<[Horror]>{
          return this.http.get<[Horror]>(this.baseurl);
        }
}
