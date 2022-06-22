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
  customer: Customer = new Customer('', '', '', '');

  constructor(private customerSvc: CustomerService) {}

  ngOnInit(): void {}

  saveNewUser() {
    this.customerSvc.createUser(this.customer).subscribe((res) => {
      console.log(res);

      this.customers.push();
    });
  }
}
