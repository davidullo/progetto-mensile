import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  randomizedCustomers: Customer[] = [];

  searchString: string = '';

  isFetching: boolean | undefined;
  constructor(private customerSvc: CustomerService, private router: Router) {}

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
        console.log(this.customers);
        // let's randomize customers and assign to randomizedCustomers
        this.randomizedCustomers = this.customers.sort(
          (a, b) => 0.5 - Math.random()
        );
        console.log(this.randomizedCustomers);
      });
  }

  submit() {
    this.router.navigate(['/search', this.searchString]);
  }
}
