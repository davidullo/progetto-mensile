import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from './customer.service';
import { map } from 'rxjs/operators';

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

  constructor(private customerSvc: CustomerService) {}

  ngOnInit(): void {
    // this.customerSvc.getAllUsers().subscribe((customers) => {
    // this.customers = customers;
    // });

    this.isFetching = true;

    this.customerSvc
      .getAllCustomers()
      .pipe(
        map((res) => {
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              this.customers.push({ ...res[key], id: key });
            }
          }
          return this.customers;
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
        this.customers.push(res);
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
}
