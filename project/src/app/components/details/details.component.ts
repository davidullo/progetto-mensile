import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/customers/customer.service';
import { countryToAlpha2, countryToAlpha3 } from 'country-to-iso';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  customers: Customer[] = [];
  details: any = new Customer(
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

  single: Customer = new Customer(
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

  lookup = require('country-code-lookup');

  mapUrl =
    'https://maps.googleapis.com/maps/api/staticmap?center=Tampa,US&zoom=15&size=600x600&scale=2&key=AIzaSyB3oKh0f5scCVWWAasDU_Kg-CP_cZqc-fM';

  mapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
  mapUrlCity = '';
  mapUrlState = '';
  mapUrl2 =
    '&zoom=15&size=600x600&scale=2&key=AIzaSyB3oKh0f5scCVWWAasDU_Kg-CP_cZqc-fM';
  mapUrlComplete =
    this.mapUrl1 + this.mapUrlCity + ',' + this.mapUrlState + this.mapUrl2;

  isFetching: boolean | undefined;
  constructor(
    private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = +p['id'];
      this.getID(id);
    });
  }

  getID(id: number) {
    this.customerSvc.getID(id).subscribe({
      next: (res) => {
        this.details = res;
        this.single = this.details[id];
        this.mapUrlCity = this.single.address.city;
        this.getCodeByCountry();
        this.mapUrlComplete =
          this.mapUrl1 +
          this.mapUrlCity +
          ',' +
          this.mapUrlState +
          this.mapUrl2;
        console.log(this.mapUrlComplete);
      },
    });
  }

  getCodeByCountry() {
    console.log(this.single.address.state);
    // let a = this.lookup.byCountry('United States');
    let a = this.lookup.byCountry(this.single.address.state);
    this.mapUrlState = a.fips;
    console.log(a);
    return a;
  }
}
