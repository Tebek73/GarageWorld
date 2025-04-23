import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { CarFormComponent } from '../../car-form/car-form.component';
@Component({
  selector: 'app-customer-details',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    CarFormComponent
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
          },
          error =>{
            console.error('error:',error);
          }
        );

        this.carService.get().subscribe({
          next: (allCars) => {
            // filtreaza masinile doar pentru clientul curent
            this.cars = allCars.filter(car => car.ownerId === this.customerId);
          },
          error: (err) => console.error('Error loading cars:', err)
        });
      }
  }

  onCarCreated(newCar: Car) {
    // optional: reîncarcă clientul din backend
    // this.loadCustomer();

    // adaugă local noua mașină în array-ul de mașini
    if (this.customer.cars) {
      this.customer.cars.push(newCar);
    } else {
      this.customer.cars = [newCar];
    }
  }

}
