import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-customer-details',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit{

  private activatedRouter = inject(ActivatedRoute);
  private customerService = inject(CustomerService);
  private carService = inject(CarService);

  customer!: Customer;
  customerId!: string;
  cars: Car[] = [];

  ngOnInit(): void {
      this.customerId = this.activatedRouter.snapshot.params['id'];
      if(this.customerId){

        this.customerService.getById(this.customerId).subscribe(
          data => {
            this.customer = data;
            this.cars = data.cars || [];
          },
          error =>{
            console.error('error:',error);
          }
        );


      }
  }

  deleteCar(carId: string){
    if(!confirm('Esti sigur ca vrei sa stergi masina din lista?')) return;

    this.carService.delete(carId).subscribe({

      next: () => {
        this.cars = this.cars.filter(car => car._id !== carId);
      },
      error: (error) => {
        console.error('Error deleting car:', error);
      }

    });

  }

}
