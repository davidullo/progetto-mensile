import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4201/customers';

  // getAllUsers(customers: Customer[]) {
  //  return this.http.get<Customer[]>(this.apiUrl);
  //}

  getAllUsers() {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  createUser(customer: Customer) {
    // indirizzo da chiamare e dato da inserire come parametri
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  deleteUser(id: number) {
    return this.http.delete<Customer>(
      this.apiUrl + '/' + id
      //customer
    );
  }

  updateUser(customer: Customer) {
    return this.http.patch<Customer>(this.apiUrl + '/' + customer.id, customer);
  }
}
