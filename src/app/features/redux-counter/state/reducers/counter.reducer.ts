import { createReducer, on } from '@ngrx/store';
import { CounterComponentEvents } from '../actions/counter.actions';
// Describe this state for the TypeScript
export interface CounterState {
  current: number;
}

// what should the "initial state" of this be when the application starts up.

const initialState: CounterState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(CounterComponentEvents.reset, () => initialState),
  on(
    CounterComponentEvents.incremented,
    (currentState: CounterState): CounterState => ({
      ...currentState,
      current: currentState.current + 1,
    }),
  ),
  on(CounterComponentEvents.decremented, (s) => ({
    ...s,
    current: s.current - 1,
  })),
);
