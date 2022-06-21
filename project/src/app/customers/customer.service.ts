import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4201/customers';

  createUser(customer: Customer) {
    // indirizzo da chiamare e dato da inserire come parametri
    return this.http.post(this.apiUrl, customer);
  }
}
