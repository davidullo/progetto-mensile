import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/classes/customer';
import { CustomerService } from 'src/app/customers/customer.service';

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
        console.log(this.details);
        this.single = this.details[id];
        console.log(this.single);
      },
    });
  }
}
