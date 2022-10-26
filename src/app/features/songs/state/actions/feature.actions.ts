import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const SongsFeatureEvents = createActionGroup({
  source: 'Songs SongsFeature Events',
  events: {
    entered: emptyProps(),
  },
});
