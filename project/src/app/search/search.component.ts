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

  state: any = new Customer('', '', '', '', '', '', '', '', '', '', '', '', '');

  searchText = '';

  mapUrl =
    'https://maps.googleapis.com/maps/api/staticmap?center=Rome,IT&zoom=14&size=600x6000&key=AIzaSyB3oKh0f5scCVWWAasDU_Kg-CP_cZqc-fM';

  constructor(
    private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.getBeaches(res.state);
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

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    if (this.searchText == '') {
      this.state = this.customers;
      console.log(this.state);
    } else {
      this.state = this.customers.filter((e) => {
        return (e.address.state || e.address.city)
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
