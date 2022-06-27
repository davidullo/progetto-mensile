import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerSvc: CustomerService
  ) {}

  data = {};

  ngOnInit(): void {}
}
