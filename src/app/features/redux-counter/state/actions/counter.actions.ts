import { createActionGroup, emptyProps, props } from '@ngrx/store';

// these are things the components tell us about.
// they are things that happened to a particular component.

export const CounterComponentEvents = createActionGroup({
  source: 'Counter CounterComponent Events',
  events: {
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

export const CounterComponentDocuments = createActionGroup({
  source: 'Counter CounterComponent Documents',
  events: {},
});
