import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';
import {  MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit{
  private appointmentService = inject(AppointmentService);

  appointments!: Appointment[]

  ngOnInit():void{
    this.initData();
  }

  initData(): void{
    this.appointmentService.get().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error:unknown) =>{
        console.error('error:', error);
      }
    );
  }

  onDeleteClick(appointment: Appointment){

      if(window.confirm("Esti sigur/sigura ca vrei sa stergi programarea?")){
        this.appointmentService.delete(appointment._id).subscribe(
          data => {
            this.initData();
          },
          error => {
            console.error('error:', error);
          }
        );
      }

    }



}
