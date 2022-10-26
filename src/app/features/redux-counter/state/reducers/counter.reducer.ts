import { createReducer, on } from '@ngrx/store';

import {
  CounterComponentDocuments,
  CounterComponentEvents,
} from '../actions/counter.actions';
// Describe this state for the TypeScript
export interface CounterState {
  current: number;
  by: 1 | 3 | 5;
}

// what should the "initial state" of this be when the application starts up.

const initialState: CounterState = {
  current: 0,
  by: 1,
};

// RULE: "Pure Functions" -> a "map" from the input to the output, and has no side-effects
export const reducer = createReducer(
  initialState,
  on(CounterComponentDocuments.state, (_, action) => action.payload), // make the new state what this document has.
  on(CounterComponentEvents.by, (s, a) => ({ ...s, by: a.by })),
  on(CounterComponentEvents.reset, () => initialState),
  on(CounterComponentEvents.incremented, incrementState),
  on(CounterComponentEvents.decremented, (s) => ({
    ...s,
    current: s.current - s.by,
  })),
);

function incrementState(
  currentState: CounterState,
  action: unknown,
): CounterState {
  // NOT allowed to reach outside of it's scope.
  // can't CHANGE something outside of it's scope.
  // calling apis, writing to localstorage, relying the clock.
  return { ...currentState, current: currentState.current + currentState.by };
}
