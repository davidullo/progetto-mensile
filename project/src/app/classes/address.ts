import { IAddress } from '../interfaces/address';

export class Address implements IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(street: string, city: string, state: string, zip: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
