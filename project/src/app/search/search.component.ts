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

  luogo: any = new Customer('', '', '', '', '', '', '', '', '', '', '', '', '');

  searchText = '';

  constructor(
    private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBeaches();
  }

  getBeaches() {
    this.customerSvc.getAllCustomers().subscribe((res) => {
      this.customers = res;
      this.search();
    });
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    if (this.searchText == '') {
      this.luogo = this.customers;
      console.log(this.luogo);
    } else {
      this.luogo = this.customers.filter((e) => {
        return e.address.state
          ?.toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    }
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
