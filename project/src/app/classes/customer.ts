import { IAddress } from '../interfaces/address';
import { ICustomer } from '../interfaces/customer';
import { Address } from '../classes/address';

export class Customer implements ICustomer {
  id!: number;
  name!: string;
  lastname!: string;
  address!: IAddress;
  email!: string;
  password!: string;

  constructor(name: string, lastname: string, email: string, password: string) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.address = new Address('', '', '', '');
  }
}
