import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PartService } from '../services/part.service';



@Component({
  selector: 'app-partcreate',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './partcreate.component.html',
  styleUrl: './partcreate.component.scss'
})
export class PartcreateComponent implements OnInit{
  form!: FormGroup
  router = inject(Router);
  private partService = inject(PartService);


  ngOnInit(): void {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        partNumber: new FormControl('', Validators.required),
        manufacturer: new FormControl('', Validators.required),
        stock: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
      });
  }

  onSubmit(){
    if(this.form.valid){
      this.partService.post(this.form.value).subscribe(
        data => {
          this.router.navigate(['/parts/']);
        },
        error => {
          console.log("error: ", error);
        }
      );
    }
  }
}
