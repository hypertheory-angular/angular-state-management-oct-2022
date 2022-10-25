import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

// these are things the components tell us about.
// they are things that happened to a particular component.

export const CounterComponentEvents = createActionGroup({
  source: 'Counter CounterComponent Events',
  events: {
    entered: emptyProps(),
    incremented: emptyProps(),
    decremented: emptyProps(),
    reset: emptyProps(),
    by: props<{ by: 1 | 3 | 5 }>(),
  },
});

export const CounterComponentCommands = createActionGroup({
  source: 'Counter CounterComponent Commands',
  events: {},
});

// actions that have state specifically for your reducer
export const CounterComponentDocuments = createActionGroup({
  source: 'Counter CounterComponent Documents',
  events: {
    state: props<{ payload: CounterState }>(),
  },
});
