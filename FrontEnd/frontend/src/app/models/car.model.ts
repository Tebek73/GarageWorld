export class Car {
  _id!: string;
  registrationNumber!: string;
  chassisSeries!: string;
  brand!: string;
  model!: string;
  yearOfManufacture!: number;
  engineType!: 'diesel' | 'benzina' | 'hibrid' | 'electric';
  engineCapacity!: number;
  horsepower!: number;
  kw?: number;
  ownerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
