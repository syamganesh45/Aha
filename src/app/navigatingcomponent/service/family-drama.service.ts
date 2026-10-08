import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyDrama } from '../models/family-drama';

@Injectable({
  providedIn: 'root'
})
export class FamilyDramaService {
  private baseurl = "";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<[FamilyDrama]>{
          return this.http.get<[FamilyDrama]>(this.baseurl);
        }
}
