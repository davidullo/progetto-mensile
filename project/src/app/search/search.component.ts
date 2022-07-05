import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Customer } from '../classes/customer';
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  customers: Customer[] = [];
  locations: any = new Customer(
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

  location: Customer = new Customer(
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

  constructor(
    private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
      });
  }

  // getState(state: string) {
  //   this.customerSvc.getState(state).subscribe({
  //     next: (res) => {
  //       this.locations = res;
  //       this.location = this.locations[state];
  //     },
  //   });
  // }
}
