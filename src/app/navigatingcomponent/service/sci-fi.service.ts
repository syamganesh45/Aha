import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SciFi } from '../models/sci-fi';

@Injectable({
  providedIn: 'root'
})
export class SciFiService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<[SciFi]>{
      return this.http.get<[SciFi]>(this.baseurl);
     }
}
