import { createReducer, on } from '@ngrx/store';
import { SongsFeatureEvents } from '../actions/feature.actions';

export interface ErrorsState {
  hasError: boolean;
  errorMessage?: string;
}

const initialState: ErrorsState = {
  hasError: false,
};

export const reducer = createReducer(
  initialState,
  on(SongsFeatureEvents.errordismissed, () => initialState),
  on(SongsFeatureEvents.apierror, (s, a) => ({
    ...s,
    hasError: true,
    errorMessage: a.payload,
  })),
);
