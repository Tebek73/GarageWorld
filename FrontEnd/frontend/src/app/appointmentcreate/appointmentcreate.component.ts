import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { Car } from '../models/car.model';
import { CustomerService } from '../services/customer.service';
import { CarService } from '../services/car.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointmentcreate',
  imports: [
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './appointmentcreate.component.html',
  styleUrl: './appointmentcreate.component.scss'
})
export class AppointmentcreateComponent implements OnInit{

  form!: FormGroup;
  customers: Customer[] = [];
  cars: Car[] = [];
  //takenHours: string[] = [];
  //isDateFull: boolean = false;

  private router = inject(Router);
  private customerService = inject(CustomerService);
  private carService = inject(CarService);
  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.form = new FormGroup({
      customer: new FormControl(null, Validators.required),
      car: new FormControl({value:null, disabled: true}, Validators.required),
      contactMethod: new FormControl('', Validators.required),
      actionDescription: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      startHour: new FormControl('',Validators.required)
    });

    this.customerService.get().subscribe(
      data=>{
        this.customers = data;
      },
      error => {
        console.log('error:', error);
      }
    );

    this.form.get('customer')?.valueChanges.subscribe(
      customer => {
        if(customer){
          this.customerService.getCarsOf(customer).subscribe(
            data => {
              this.cars = data;
              this.form.get('car')?.enable();
            },
            error => {
              console.log('error:',error);
            }
          );
        }
        else{
          this.cars = [];
          this.form.get('car')?.disable();
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }
  /*
  checkAvailableHours(date: string): void{
    //this.appointmentService.getAppointmentsByDate
  }
  */
  onSubmit(): void{

    if(this.form.valid){
      this.appointmentService.post(this.form.value).subscribe(
        data => {
          console.log('data posted');
          this.router.navigate(['/appointments/']);
        },
        error => {
          console.log('error:',error);
        }
      );
    }

  }

}
