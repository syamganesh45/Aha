import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
    onsubmit():Observable<[Action]>{
            return this.http.get<[Action]>(this.baseurl);
          }
}
