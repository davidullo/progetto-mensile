import { IAddress } from '../interfaces/address';
import { ICustomer } from '../interfaces/customer';
import { Address } from '../classes/address';

export class Customer implements ICustomer {
  id!: number;
  name!: string;
  lastname!: string;
  address!: IAddress;
  email!: string;
  number!: string;
  password!: string;
  area!: string;
  bar!: boolean;
  restaurant!: boolean;
  shower!: boolean;
  waiter!: boolean;

  constructor(
    name: string,
    lastname: string,
    email: string,
    number: string,
    password: string,
    area: string,
    bar: boolean,
    restaurant: boolean,
    shower: boolean,
    waiter: boolean
  ) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.number = number;
    this.password = password;
    this.area = area;
    this.bar = bar;
    this.restaurant = restaurant;
    this.shower = shower;
    this.waiter = waiter;
    this.address = new Address('', '', '', '', '', '');
  }
}
