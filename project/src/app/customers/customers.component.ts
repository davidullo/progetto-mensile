import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from './customer.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ICustomer } from '../interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = new Customer(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );
  isFetching: boolean | undefined;
  apiUrl =
    'https://lidi-52fb3-default-rtdb.europe-west1.firebasedatabase.app/customers.json';

  constructor(
    private http: HttpClient,
    private customerSvc: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.customerSvc.getAllUsers().subscribe((customers) => {
    // this.customers = customers;
    // });

    this.isFetching = true;

    this.customerSvc
      .getAllCustomers()
      .pipe(
        map((res) => {
          const customersArray = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              customersArray.push({ ...res[key], id: key });
            }
          }
          return customersArray;
        })
      )
      .subscribe((customers) => {
        this.isFetching = false;
        this.customers = customers;
      });
  }

  saveNewCustomer() {
    this.customerSvc
      .createCustomer(this.customer)
      .subscribe((res: Customer) => {
        console.log(res);
        // this.customers.push(res);
      });
  }

  removeCustomer(id: number) {
    this.customerSvc.deleteCustomer(id).subscribe((res) => {
      console.log(res);
      this.customers = this.customers.filter((c) => c.id != id);
    });
  }

  selectCustomer(customer: Customer) {
    this.customer = customer;
  }

  editCustomer() {
    this.customerSvc
      .updateCustomer(this.customer)
      .subscribe((res: Customer) => {
        console.log(res);
        let index = this.customers.findIndex(
          (customer) => customer.id == res.id
        );
        this.customers.splice(index, 1, res);
      });
  }

  storeCustomers() {
    const customers = this.customerSvc.getAllCustomers();
    this.http.put(this.apiUrl, this.customers).subscribe((res) => {
      console.log(res);
    });
  }

  onSaveData() {
    this.storeCustomers();
  }
}
