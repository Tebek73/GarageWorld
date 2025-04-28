import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router,RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-carcreate',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './carcreate.component.html',
  styleUrl: './carcreate.component.scss'
})
export class CarcreateComponent implements OnInit {

  form!: FormGroup;
  router = inject(Router);
  private carService = inject(CarService);
  private activatedRoute = inject(ActivatedRoute);
  ownerId! : string;

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id'];
    this.form = new FormGroup({
      "ownerId" : new FormControl(this.ownerId, Validators.required),
      "registrationNumber" : new FormControl('', Validators.required),
      "chassisSeries": new FormControl('',Validators.required),
      "brand": new FormControl('',Validators.required),
      "model": new FormControl('',Validators.required),
      "yearOfManufacture": new FormControl('',Validators.required),
      "engineType": new FormControl('',Validators.required),
      "engineCapacity": new FormControl('',Validators.required),
      "horsepower": new FormControl('',Validators.required),
      "kw" : new FormControl('')
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.carService.post(this.form.value).subscribe(
        data => {
          console.log('data posted');
          this.router.navigate(['/clients/details/',this.ownerId]);
        },
        error => {
          console.log('error:',error);
        }
      );
    }
  }

}
