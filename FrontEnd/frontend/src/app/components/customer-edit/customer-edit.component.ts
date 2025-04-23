import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-customer-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent {
  private activatedRouter = inject(ActivatedRoute);
  private customerService = inject(CustomerService);
  customer!: Customer;
  customerId!: string;

  form!: FormGroup;
  router = inject(Router);


  ngOnInit(): void {
     // get the customer from the url
    this.customerId = this.activatedRouter.snapshot.params['id'];
    // init the form
    this.form = new FormGroup({
      surname: new FormControl('',Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required)
    });

    if (this.customerId) {
      // get the cstomer info
      this.customerService.getById(this.customerId).subscribe(
        data => {
          this.customer = data;
          this.form.patchValue(data);
        },
        error => {
          console.error('error:', error);
        }
      )
    }

  }

  onSubmit() {
    // validate the form
    if (this.form.valid) {
      this.customerService.put(this.customerId, this.form.value).subscribe(
        data => {
          console.log('data posted');
          this.router.navigate(['/clients']);
        },
        error => {
          console.error('error:', error);
        }
      )
    }
  }

}
