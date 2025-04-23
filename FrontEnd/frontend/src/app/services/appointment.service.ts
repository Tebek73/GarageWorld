import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private api = "http://localhost:5000/api/appointments"

  constructor(
    private http: HttpClient
  ) { }

  get() : Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.api);
  }

  getById(id: string) : Observable<Appointment>{
    return this.http.get<Appointment>(this.api + "/" + id);
  }

  post(appointment: Appointment) : Observable<Appointment>{
    return this.http.post<Appointment>(this.api,appointment);
  }

  put(id: string, appointment:Appointment):Observable<Appointment>{
    return this.http.put<Appointment>(this.api + '/' + id, appointment);
  }

  delete(id: string): Observable<Appointment>{
    return this.http.delete<Appointment>(this.api + "/" + id);
  }
}
