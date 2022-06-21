import { IAddress } from './address';

export interface ICustomer {
  id: number;
  name: string;
  lastname: string;
  address: IAddress;
  email: string;
  password: string;
}
