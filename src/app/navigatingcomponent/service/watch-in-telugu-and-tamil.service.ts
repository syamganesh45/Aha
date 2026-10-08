import { Injectable } from '@angular/core';
import { WatchInTeluguAndTamil } from '../models/watch-in-telugu-and-tamil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchInTeluguAndTamilService {
private baseurl = "";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<WatchInTeluguAndTamil[]>{
    return this.http.get<WatchInTeluguAndTamil[]>(this.baseurl);
  }
}
