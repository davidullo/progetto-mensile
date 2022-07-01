import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // if admin includes the id of the admin, customers page will be accessible.
    let admin = localStorage.getItem('userData');
    if (admin.includes('H4VDUwbCFTWTqcGiUIrQ10n4zak2')) {
      return true;
    } else {
      console.log('does not exists');
      return this.router.createUrlTree(['/home']);
    }
  }
}
