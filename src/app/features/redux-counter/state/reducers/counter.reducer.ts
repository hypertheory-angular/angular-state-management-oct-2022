import { createReducer, on } from '@ngrx/store';
import { CounterComponentEvents } from '../actions/counter.actions';
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

export const reducer = createReducer(
  initialState,
  on(CounterComponentEvents.by, (s, a) => ({ ...s, by: a.by })),
  on(CounterComponentEvents.reset, () => initialState),
  on(
    CounterComponentEvents.incremented,
    (currentState: CounterState): CounterState => ({
      ...currentState,
      current: currentState.current + currentState.by,
    }),
  ),
  on(CounterComponentEvents.decremented, (s) => ({
    ...s,
    current: s.current - s.by,
  })),
);
