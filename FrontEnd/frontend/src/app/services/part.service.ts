import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from '../models/part.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartService {
  private api = "http://localhost:5000/api/parts"
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Part[]>{
    return this.http.get<Part[]>(this.api);
  }

  getById(id: string): Observable<Part>{
    return this.http.get<Part>(this.api + '/' + id);
  }

  post(part: Part): Observable<Part>{
    return this.http.post<Part>(this.api, part);
  }

  put(id: string, part: Part): Observable<Part>{
    return this.http.put<Part>(this.api + '/' + id, part);
  }

  delete(id: string): Observable<Part>{
    return this.http.delete<Part>(this.api + '/' + id);
  }

}
