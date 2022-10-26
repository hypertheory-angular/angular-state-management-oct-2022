import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsUserLoggedIn } from 'src/app/features/auth/state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  loggedIn$ = this.store.select(selectIsUserLoggedIn);
  constructor(private store: Store) {}
}
