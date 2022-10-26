import { createReducer, on } from '@ngrx/store';
import { AuthDocuments } from '../actions/auth.actions';

export interface UserState {
  name?: string;
  email?: string;
}

const initialState: UserState = {};

export const reducer = createReducer(
  initialState,
  on(AuthDocuments.user, (_, a) => a.payload),
);
