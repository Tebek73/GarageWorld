
export class Appointment{
  _id!: string;
  customer!: {
    surname: string,
    name: string
  };
  car!: {
    registrationNumber: string,
    brand: string,
    model: string
  };
  contactMethod!: string;
  actionDescription!: string;
  date!: Date;
  startHour!: string;
  status!: string;
}
