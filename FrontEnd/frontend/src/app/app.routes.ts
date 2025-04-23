import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { HomeComponent } from './home/home.component';
import { PartsComponent } from './parts/parts.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentcreateComponent } from './appointmentcreate/appointmentcreate.component';
import { PartcreateComponent } from './partcreate/partcreate.component';
import { ParteditComponent } from './partedit/partedit.component';
import { AppointmenteditComponent } from './appointmentedit/appointmentedit.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "parts",
    component: PartsComponent
  },

  {
    path:"parts/create",
    component: PartcreateComponent
  },

  {
    path:"parts/edit/:id",
    component: ParteditComponent
  },

  {
    path:"appointments",
    component: AppointmentsComponent
  },

  {
    path:"appointments/create",
    component: AppointmentcreateComponent
  },

  {
    path:"appointments/edit/:id",
    component: AppointmenteditComponent
  },

  {
    path: "clients",
    component: CustomerListComponent
  },

  {
    path: "clients/create",
    component: CustomerCreateComponent
  },


  {
    path: "clients/details/:id",
    component: CustomerDetailsComponent
  },
  {
    path: "clients/edit/:id",
    component: CustomerEditComponent
  }

];
