import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsUserLoggedIn } from 'src/app/features/auth/state';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css'],
})
export class MastheadComponent {
  isLoggedIn$ = this.store.select(selectIsUserLoggedIn);
  constructor(private readonly store: Store) {}

  logIn() {}

  logOut() {}
}
