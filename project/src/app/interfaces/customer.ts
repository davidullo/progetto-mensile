import { IAddress } from './address';

export interface ICustomer {
  id?: any;
  name: string;
  lastname: string;
  address: IAddress;
  email: string;
  number: string;
  password: string;
  area: string;
  bar: boolean | string;
  restaurant: boolean | string;
  shower: boolean | string;
  waiter: boolean | string;
  photo1: string;
  photo2: string;
  photo3: string;
}
