import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { AdminGuard } from 'src/app/admin.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  admin: string;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private adminGuard: AdminGuard
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; // that means -> this.isAuthenticated = !user ? false : true;
    });
    this.admin = localStorage.getItem('userData');
    if (this.admin?.includes('H4VDUwbCFTWTqcGiUIrQ10n4zak2')) {
      console.log('set as admin');
      this.isAdmin = true;
    } else {
      console.log('set as user/visitor');
      this.isAdmin = false;
    }
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
