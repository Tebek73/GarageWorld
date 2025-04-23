import { Customer } from "./customer.model"

export class Appointment{
  _id!: string;
  customerId!: string;
  carId!: string;
  contactMethod!: string;
  actionDescription!: string;
  startHour!: string;
  status!: string;
}
