import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  apiUrl =
    'https://lidi-52fb3-default-rtdb.europe-west1.firebasedatabase.app/customers.json';
  isFetching = false;

  // getAllUsers(customers: Customer[]) {
  //  return this.http.get<Customer[]>(this.apiUrl);
  //}

  getAllCustomers() {
    this.isFetching = true;
    return this.http.get<Customer[]>(this.apiUrl);
  }

  createCustomer(customer: Customer) {
    // indirizzo da chiamare e dato da inserire come parametri
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete<Customer>(this.apiUrl + '/' + id);
  }

  updateCustomer(customer: Customer) {
    return this.http.patch<Customer>(this.apiUrl + '/' + customer.id, customer);
  }
}
