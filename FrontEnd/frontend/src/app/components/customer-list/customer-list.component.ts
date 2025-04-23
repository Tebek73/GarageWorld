import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  // inject the customer service
  private customerService = inject(CustomerService);
  //customer list
  customers!: Customer[]

  ngOnInit(): void{

    this.initData();
  }


  initData(): void{
    this.customerService.get().subscribe(
      (data: Customer[]) => {
        console.log('customers:',data);
        this.customers = data;
      },
      (error: unknown) => {
        console.error('error:', error);
      }
    );
  }

  onDeleteClick(customer: Customer){
    if(window.confirm("Are you sure you want to delete: " + customer.name + "?")){
      this.customerService.delete(customer._id).subscribe(
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
