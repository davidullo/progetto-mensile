import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/customers/customer.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  constructor(private customerSvc: CustomerService, private router: Router) {}

  customers: Customer[] = [];
  randomizedCustomers: Customer[] = [];

  ngOnInit(): void {
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
        this.customers = customers;
        console.log(this.customers);
        // let's randomize customers and assign to randomizedCustomers
        this.randomizedCustomers = this.customers.sort(
          (a, b) => 0.5 - Math.random()
        );
        console.log(this.randomizedCustomers);
      });
  }
}
