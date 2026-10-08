import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchForFree } from '../models/watch-for-free';

@Injectable({
  providedIn: 'root'
})
export class WatchForFreeService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<WatchForFree[]>{
    return this.http.get<WatchForFree[]>(this.baseurl);
  }
}
