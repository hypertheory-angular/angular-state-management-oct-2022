import { createReducer } from '@ngrx/store';

export interface UserState {
  name?: string;
  email?: string;
}

const initialState: UserState = {};

export const reducer = createReducer(initialState);
