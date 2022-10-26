import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromSongList from './reducers/song-list.reducer';
export const FEATURE_NAME = 'songsFeature';

export interface SongsState {
  list: fromSongList.SongListState;
}

export const reducers: ActionReducerMap<SongsState> = {
  list: fromSongList.reducer,
};

const selectFeature = createFeatureSelector<SongsState>(FEATURE_NAME);
