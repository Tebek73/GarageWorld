import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PartService } from '../services/part.service';
import { Part } from '../models/part.model';



@Component({
  selector: 'app-partedit',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './partedit.component.html',
  styleUrl: './partedit.component.scss'
})
export class ParteditComponent implements OnInit {
  private activatedRouter = inject(ActivatedRoute);
  private partService = inject(PartService);
  part!: Part;
  partId!: string;

  form!: FormGroup;
  router = inject(Router);


  ngOnInit(): void {

    this.partId = this.activatedRouter.snapshot.params['id'];

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      partNumber: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });

    if (this.partId) {
      this.partService.getById(this.partId).subscribe(
        data => {
          this.part= data;
          this.form.patchValue(data);
        },
        error => {
          console.error('error:', error);
        }
      )
    }

  }




  onSubmit(): void {

    if (this.form.valid) {
      this.partService.put(this.partId, this.form.value).subscribe(
        data => {
          console.log('data posted');
          this.router.navigate(['/parts']);
        },
        error => {
          console.error('error:', error);
        }
      )
    }
  }

}


