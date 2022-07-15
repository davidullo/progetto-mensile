import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Customer } from '../classes/customer';
import { CustomerService } from '../customers/customer.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

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

  state: Customer[] = [];

  searchText = '';

  lookup = require('country-code-lookup');

  mapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
  mapUrlCity = '';
  mapUrlState = '';
  mapUrl2 =
    '&zoom=6&size=600x600&scale=1&key=AIzaSyB3oKh0f5scCVWWAasDU_Kg-CP_cZqc-fM';
  mapUrlComplete =
    this.mapUrl1 + this.mapUrlCity + ',' + this.mapUrlState + this.mapUrl2;

  page = 5;
  pageSize = 5;

  constructor(
    private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.getBeaches(res.state);
      console.log(res.state);
    });
  }

  getBeaches(state: string) {
    this.customerSvc.getAllCustomers().subscribe((res) => {
      res = res.filter(
        (b) => b.address.state.toLowerCase() == state.toLowerCase()
      );
      this.customers = res;
      this.search();
    });
  }

  // searchKey(data: string) {
  //   this.searchText = data;
  //   console.log(this.searchText);
  //   this.search();
  // }

  search() {
    if (this.searchText == '') {
      this.state = this.customers;
      console.log(this.customers);

      // console.log(this.state[0].address.state);
      this.getCodeByCountry(
        this.state[0].address.city,
        this.state[0].address.state
      );
      this.mapUrlComplete =
        this.mapUrl1 + this.mapUrlCity + ',' + this.mapUrlState + this.mapUrl2;
      // console.log(this.mapUrlComplete);
    } else {
      this.state = this.customers.filter((e) => {
        return e.address.state
          ?.toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    }
  }

  getCodeByCountry(cityString: string, stateString: string) {
    // console.log(stateString);
    // let a = this.lookup.byCountry('United States');
    let a = this.lookup.byCountry(stateString);
    this.mapUrlState = a.fips;
    this.mapUrlCity = a.capital;
    // console.log(this.mapUrlState);
    return a;
  }

  // getState(state: string) {
  //   this.customerSvc.getState(state).subscribe({
  //     next: (res) => {
  //       this.locations = res;
  //       this.location = this.locations[state];
  //     },
  //   });
  // }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
