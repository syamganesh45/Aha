import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AhaOriginals } from '../models/aha-originals';

@Injectable({
  providedIn: 'root'
})
export class AhaOriginalsService {
   private baseurl = "";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<[AhaOriginals]>{
        return this.http.get<[AhaOriginals]>(this.baseurl);
      }
}
