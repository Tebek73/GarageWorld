import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {

  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

  goToParts() {
    this.router.navigate(['/parts']);
  }

  goToAppointments() {
    this.router.navigate(['/appointments']);
  }
}
