import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { AuthEvents, AuthDocuments } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  logOff$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthEvents.logoff),
      // do your magic!
      map(() => AuthDocuments.user({ payload: {} })),
    );
  });
  // that turns on AuthEvent.requested -> (MAGIC!) -> AuthDocuments.user
  logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthEvents.requested),
      // do your magic here!
      map(() =>
        AuthDocuments.user({
          payload: { name: 'Bob Smith', email: 'bob@aol.com' },
        }),
      ),
    );
  });
  constructor(private readonly actions$: Actions) {}
}
