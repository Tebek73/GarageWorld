import { Appointment } from "./appointment.model";

export class ServiceHistory{
  _id!: string;
  appointmentId!: Appointment;
  receptionNotes!: string;
  operationsPerformed!: string;
  durationMinutes!: number;
}
