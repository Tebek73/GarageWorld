import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-form',
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent {
  @Input() ownerId!: string;
  @Output() carAdded = new EventEmitter<void>();

  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService
  ){
    this.carForm = this.fb.group({
      registrationNumber: ['', Validators.required],
      chassisSeries: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      yearOfManufacture: [null, [Validators.required, Validators.min(1900)]],
      engineType: ['', Validators.required],
      engineCapacity: [null, Validators.required],
      horsepower: [null, Validators.required],
      kw: [null]
    });
  }

  submitForm(): void {
    if (this.carForm.valid) {
      const newCar: Car = {
        ...this.carForm.value,
        ownerId: this.ownerId
      };
      this.carService.post(newCar).subscribe({
        next: () => {
          this.carForm.reset();
          this.carAdded.emit();
        },
        error: err => console.error('Error creating car', err)
      });
    }
  }
}
