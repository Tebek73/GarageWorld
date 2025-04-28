import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceHistory } from '../models/servicehistory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicehistoryService {

  private api = "http://localhost:5000/api/serviceHistoric"

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<ServiceHistory[]>{
    return this.http.get<ServiceHistory[]>(this.api);
  }

  getById(id:string): Observable<ServiceHistory>{
    return this.http.get<ServiceHistory>(this.api + "/" + id);
  }

  post(serviceHistory: ServiceHistory): Observable<ServiceHistory>{
    return this.http.post<ServiceHistory>(this.api,serviceHistory);
  }

  put(id: string, serviceHistory: ServiceHistory): Observable<ServiceHistory>{
    return this.http.put<ServiceHistory>(this.api + "/" + id, serviceHistory);
  }

  delete(id: string): Observable<ServiceHistory>{
    return this.http.delete<ServiceHistory>(this.api + "/" + id);
  }
}
