import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs';
import { selectCounterBranch } from '..';
import {
  CounterComponentDocuments,
  CounterComponentEvents,
} from '../actions/counter.actions';
import { CounterState } from '../reducers/counter.reducer';
@Injectable()
export class CounterEffects {
  // when the counter is entered, check the localstorage. If there is something there, do a counterdocuments.state, if there isn't, don't do anything.
  loadCountState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CounterComponentEvents.entered), // only care about this action
        map(() => localStorage.getItem('count-data')), // null || "{by: 3, current: 99}"
        filter((val) => val !== null), // stop here if it isn't in localstorage yet.
        map((savedValue: string | null) => savedValue!), // have to force the compiler to know that this isn't null
        map((v) => JSON.parse(v) as CounterState), // it is saved as CounterState, so I'm making the compiler happy here again
        filter((cs) => cs.by === 1 || cs.by === 3 || cs.by === 5),
        map((payload) => CounterComponentDocuments.state({ payload })), // dispatch an action
      );
    },
    { dispatch: true },
  );
  // increment, decrement, reset, by
  saveCountState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          CounterComponentEvents.incremented,
          CounterComponentEvents.decremented,
          CounterComponentEvents.reset,
          CounterComponentEvents.by,
        ),
        concatLatestFrom(() => this.store.select(selectCounterBranch)), // (Actions) => [action, result]
        tap(
          // prettier-ignore
          ([ ,countData,]) => localStorage.setItem('count-data', JSON.stringify(countData)),
        ),
      );
    },
    { dispatch: false },
  );
  //   logThemAll$ = createEffect(
  //     () => {
  //       return this.actions$.pipe(
  //         tap((a) => console.log(`Got an actions of ${a.type}`)),
  //       );
  //     },
  //     { dispatch: false },
  //   );
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
  ) {}
}
