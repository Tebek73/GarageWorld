import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../app/models/appointment.model';
import { ServicehistoryService } from '../app/services/servicehistory.service';
import { ServiceHistory } from '../app/models/servicehistory.model';

@Component({
  selector: 'app-servicehistory',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './servicehistory.component.html',
  styleUrl: './servicehistory.component.scss'
})
export class ServicehistoryComponent implements OnInit{

  appointment!: Appointment;
  appointmentId!: string;
  form!: FormGroup;
  activatedRoute = inject(ActivatedRoute);
  serviceHistoryService = inject(ServicehistoryService);
  fullHistory!: ServiceHistory[];
  serviceHistory: ServiceHistory | undefined = undefined;
  router = inject(Router);


  ngOnInit(): void {
    this.appointmentId = this.activatedRoute.snapshot.params['id'];

    this.form = new FormGroup({
      appointmentId: new FormControl(this.appointmentId, Validators.required),
      receptionNotes: new FormControl(''),
      operationsPerformed: new FormControl(''),
      durationMinutes: new FormControl('')
    });

    if(this.appointmentId){
      this.serviceHistoryService.get().subscribe(
        next => {
          this.fullHistory = next;
          //console.log(this.fullHistory);
          this.serviceHistory = this.fullHistory.find(
            (sh) => sh.appointmentId?._id === this.appointmentId
          );
          if (this.serviceHistory) {
            this.form.patchValue(this.serviceHistory);
          }
          else{
            console.warn('Istoric service nu a fost gasit');
          }
        },
        error => {
          console.error('error:', error);
        }
      )
    }
  }

  onSubmit(){
    if(this.form.valid){
      if(this.serviceHistory){
        this.serviceHistoryService.put(this.serviceHistory?._id as string, this.form.value).subscribe(
          next => {
            console.log('data posted');
            this.router.navigate(['/appointments']);
          },
          error => {
            console.error('error', error);
          }
        );
      }
      else{
        this.serviceHistoryService.post(this.form.value).subscribe(
          next => {
            console.log('data posted');
            this.router.navigate(['/appointments']);
          },
          error => {
            console.error('error', error);
          }
        );
      }
    }
  }

}
