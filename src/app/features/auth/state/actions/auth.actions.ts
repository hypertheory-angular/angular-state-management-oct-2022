import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const AuthEvents = createActionGroup({
  source: 'Login Auth Events',
  events: {
    requested: emptyProps(),
    logoff: emptyProps(),
  },
});

export const AuthCommands = createActionGroup({
  source: 'Login Auth Commands',
  events: {},
});

export const AuthDocuments = createActionGroup({
  source: 'Login Auth Documents',
  events: {
    user: props<{ payload: UserState }>(),
  },
});
