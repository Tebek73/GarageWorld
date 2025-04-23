import { Car } from "./car.model";

export class Customer{
    _id!: string;
    name!: string;
    surname!: string;
    phone!: string;
    email!: string;
    isActive!: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    cars?: Car[];
}
