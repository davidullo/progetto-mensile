import { IAddress } from '../interfaces/address';
import { ICustomer } from '../interfaces/customer';
import { Address } from '../classes/address';

export class Customer implements ICustomer {
  id!: any;
  name!: string;
  lastname!: string;
  address!: IAddress;
  email!: string;
  number!: string;
  password!: string;
  area!: string;
  bar!: boolean | string;
  restaurant!: boolean | string;
  shower!: boolean | string;
  waiter!: boolean | string;
  photo1!: string;
  photo2!: string;
  photo3!: string;

  constructor(
    name: string,
    lastname: string,
    email: string,
    number: string,
    password: string,
    area: string,
    bar: boolean | string,
    restaurant: boolean | string,
    shower: boolean | string,
    waiter: boolean | string,
    photo1: string,
    photo2: string,
    photo3: string
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
    this.photo1 = photo1;
    this.photo2 = photo2;
    this.photo3 = photo3;
    this.address = new Address('', '', '', '', '', '', '');
  }
}
