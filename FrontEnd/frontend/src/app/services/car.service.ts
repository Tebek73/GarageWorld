import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private api = "http://localhost:5000/api/cars";

  constructor(private http: HttpClient) { }

  get(): Observable<Car[]> {
    return this.http.get<Car[]>(this.api);
  }

  getById(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.api}/${id}`);
  }

  post(car: Car): Observable<Car> {
    return this.http.post<Car>(this.api, car);
  }

  put(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.api}/${id}`, car);
  }

  delete(id: string): Observable<Car> {
    return this.http.delete<Car>(`${this.api}/${id}`);
  }
}
