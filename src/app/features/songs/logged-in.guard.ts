import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsUserLoggedIn } from '../auth/state';

@Injectable()
export class LoggedInGuard implements CanActivate {
  isLoggedIn$ = this.store.select(selectIsUserLoggedIn);
  constructor(private store: Store) {}
  canActivate() {
    return this.isLoggedIn$;
  }
}
