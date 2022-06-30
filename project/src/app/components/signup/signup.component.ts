import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // signUp() {
  //   this.http
  //     .post<any>('http://localhost:4201/register', this.signupForm.value)
  //     .subscribe(
  //       (res) => {
  //         alert('Signup Successful!');
  //         this.signupForm.reset();
  //         this.router.navigate(['login']);
  //       },
  //       (err) => {
  //         alert('Something went wrong.');
  //       }
  //     );
  // }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.signup(email, password);

    authObs.subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }
}
