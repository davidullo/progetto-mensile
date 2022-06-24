import { IAddress } from './address';

export interface ICustomer {
  id: number;
  name: string;
  lastname: string;
  address: IAddress;
  email: string;
  number: string;
  password: string;
  area: string;
  bar: boolean;
  restaurant: boolean;
  shower: boolean;
  waiter: boolean;
}
