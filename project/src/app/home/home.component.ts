import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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
  isFetching: boolean | undefined;
  constructor(private customerSvc: CustomerService) {}

  ngOnInit(): void {
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
}
