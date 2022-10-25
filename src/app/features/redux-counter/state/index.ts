import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
export const FEATURE_NAME = 'reduxCounter';

// tell typescript what this looks like
export interface ReduxCounterState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<ReduxCounterState> = {
  counter: fromCounter.reducer,
};

// Selectors are functions that return a "slice" of the application state as an Observable.
// 1. Create a Feature Selector

const selectFeature = createFeatureSelector<ReduxCounterState>(FEATURE_NAME);

// 2. Create a selector from the feature selector for each "branch" of the state.

const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);

// 3. Helpers (optional)

// 4. We need a thing for our actual component.

export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  (b) => b.current,
);
