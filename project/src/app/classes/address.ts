import { IAddress } from '../interfaces/address';

export class Address implements IAddress {
  beachName: string;
  beachDescription: string;
  beachNumber: string;
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(
    beachName: string,
    beachDescription: string,
    beachNumber: string,
    street: string,
    city: string,
    state: string,
    zip: string
  ) {
    this.beachName = beachName;
    this.beachDescription = beachDescription;
    this.beachNumber = beachNumber;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
