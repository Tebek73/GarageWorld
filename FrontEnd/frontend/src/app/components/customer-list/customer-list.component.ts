import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
//import { MatTableModule } from '@angular/material/table';
//import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatSortModule} from '@angular/material/sort';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule,
    //MatTableModule,
    //MatPaginatorModule,
    //MatSortModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  private customerService = inject(CustomerService);
  customers!: Customer[]

  ngOnInit(): void{

    this.initData();
  }


  initData(): void{
    this.customerService.get().subscribe(
      (data: Customer[]) => {
        //console.log('customers:',data);
        this.customers = data;
      },
      (error: unknown) => {
        console.error('error:', error);
      }
    );
  }

  onDeleteClick(customer: Customer){
    if(window.confirm("Esti sigur/sigura ca vrei sa stergi clientul " + customer.name + "?")){
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

  toggleStatus(customer: Customer){
    this.customerService.toggleStatus(customer._id).subscribe(
      next => {
        this.initData();
      },
      error => {
        console.error('error', error);
      }
    );
  }
}
