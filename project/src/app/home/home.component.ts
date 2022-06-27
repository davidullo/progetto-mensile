import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customers: Customer[] = [];
  card: Customer = new Customer(
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
  constructor(private customerSvc: CustomerService) {}

  ngOnInit(): void {
    this.customerSvc.getAllUsers().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
