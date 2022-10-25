import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountingBy } from '../../state';
import { CounterComponentEvents } from '../../state/actions/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css'],
})
export class CountByComponent {
  by$ = this.store.select(selectCountingBy);
  constructor(private readonly store: Store) {}

  setCountBy(by: 1 | 3 | 5) {
    this.store.dispatch(CounterComponentEvents.by({ by }));
  }
}
