import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from 'src/app/auth.service';
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
    private router: Router,
    private authService: AuthService
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
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(email, password);

    authObs.subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
        // this.refresh();
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }

  // refresh(): void {
  //   window.location.reload();
  // }
}
