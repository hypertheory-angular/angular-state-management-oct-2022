import { Component } from '@angular/core';
import { UserService } from 'src/app/features/auth/services/user.service';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css'],
})
export class MastheadComponent {
  user$ = this.authService.getUser();
  constructor(private readonly authService: UserService) {}

  logIn() {
    this.authService.logIn(); // this
  }

  logOut() {
    this.authService.logOut();
  }
}
