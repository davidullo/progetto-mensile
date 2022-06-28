import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  // login() {
  //   this.http.get<any>('http://localhost:4201/login').subscribe(
  //     (res) => {
  //       const user = res.find((a: any) => {
  //         return (
  //           a.email === this.loginForm.value.email &&
  //           a.password === this.loginForm.value.password
  //         );
  //       });
  //       if (user) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Login successful!',
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         //alert('Login successful!');
  //         this.loginForm.reset();
  //         this.router.navigate(['home']);
  //       } else {
  //         alert('Login failed!');
  //       }
  //     },
  //     (err) => {
  //       alert('Something went wrong.');
  //     }
  //   );
  // }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
