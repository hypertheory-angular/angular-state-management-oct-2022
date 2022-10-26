import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';
export const FEATURE_NAME = 'authFeature';

export interface AuthState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<AuthState> = {
  user: fromUser.reducer,
};

// 1 feature selector
const selectFeature = createFeatureSelector<AuthState>(FEATURE_NAME);

// 2 selector per branch of the feature state

const selectUserBranch = createSelector(selectFeature, (f) => f.user);

// helpers

// What do our components need?

export const selectIsUserLoggedIn = createSelector(
  selectUserBranch,
  (user) => !!user.name,
);
