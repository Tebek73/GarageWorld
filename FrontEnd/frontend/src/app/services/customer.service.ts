import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api = "http://localhost:5000/api/customers"
  constructor(
    private http: HttpClient
  ) { }

  get() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.api);
  }

  getById(id: string) : Observable<Customer> {
    return this.http.get<Customer>(this.api + "/" + id);
  }

  getCarsOf(id: string) : Observable<Car[]>{
    return this.http.get<Car[]>(this.api + "/" +id + "/cars");
  }

  post(customer: Customer) : Observable<Customer>{
    return this.http.post<Customer>(this.api,customer);
  }

  put(id: string, customer: Customer) : Observable<Customer>{
    return this.http.put<Customer>(this.api + '/' + id, customer);
  }

  delete(id: string) : Observable<Customer>{
    return this.http.delete<Customer>(this.api + "/" + id);
  }

  toggleStatus(id: string){
    return this.http.patch<Customer>(this.api + "/" + id + "/status", {});
  }

}
