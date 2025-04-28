import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-create',
  imports: [
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent implements OnInit {
  private customerService = inject(CustomerService);

  form!: FormGroup;

  router = inject(Router);

  ngOnInit(): void {
    this.form = new FormGroup ({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit(){

    if(this.form.valid){
      this.customerService.post(this.form.value).subscribe(
        data => {
          console.log('data posted');
          this.router.navigate(['/clients/']);
        },
        error =>{
          console.log('error:',error);
        }
      );
    }


  }



}
