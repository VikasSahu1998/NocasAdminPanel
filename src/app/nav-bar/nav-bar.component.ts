import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor( private authService: AuthService, private router: Router) {
  
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
