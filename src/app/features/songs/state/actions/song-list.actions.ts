import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { SongEntity } from '../reducers/song-list.reducer';

export const SongListEvents = createActionGroup({
  source: 'Songs SongList Events',
  events: {},
});

export const SongListCommands = createActionGroup({
  source: 'Songs SongList Commands',
  events: {
    load: emptyProps(),
  },
});

export const SongListDocuments = createActionGroup({
  source: 'Songs SongList Documents',
  events: {
    song: props<{ payload: SongEntity }>(),
    songs: props<{ payload: SongEntity[] }>(),
  },
});
