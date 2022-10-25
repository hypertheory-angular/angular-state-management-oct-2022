import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from './state';
import { CounterComponentEvents } from './state/actions/counter.actions';

@Component({
  selector: 'app-redux-counter',
  templateUrl: './redux-counter.component.html',
  styleUrls: ['./redux-counter.component.css'],
})
export class ReduxCounterComponent {
  current$ = this.store.select(selectCounterCurrent);
  constructor(private readonly store: Store) {}

  increment() {
    // an interaction happens, dispatch an action to the store
    this.store.dispatch(CounterComponentEvents.incremented());
    // tell the store what happened.
    // on the counter, in the the redux counter, the user incremented
  }

  decrement() {
    this.store.dispatch(CounterComponentEvents.decremented());
    // // on the counter, in the the redux counter, the user decremented
  }
}
