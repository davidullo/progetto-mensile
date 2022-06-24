import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = new Customer('', '', '', '', '', '', '', '', '', '');

  constructor(private customerSvc: CustomerService) {}

  ngOnInit(): void {
    // this.customerSvc.getAllUsers().subscribe((customers) => {
    // this.customers = customers;
    // });

    this.customerSvc.getAllUsers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  saveNewUser() {
    this.customerSvc.createUser(this.customer).subscribe((res: Customer) => {
      console.log(res);
      this.customers.push(res);
    });
  }

  removeUser(id: number) {
    this.customerSvc.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.customers = this.customers.filter((c) => c.id != id);
    });
  }

  selectCustomer(customer: Customer) {
    this.customer = customer;
  }

  editUser() {
    this.customerSvc.updateUser(this.customer).subscribe((res: Customer) => {
      console.log(res);
      let index = this.customers.findIndex((customer) => customer.id == res.id);
      this.customers.splice(index, 1, res);
    });
  }
}
