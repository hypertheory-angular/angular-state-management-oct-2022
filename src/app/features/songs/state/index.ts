import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { SongListModel } from '../models';

import * as fromSongList from './reducers/song-list.reducer';
import * as fromErrors from './reducers/errors.reducer';
export const FEATURE_NAME = 'songsFeature';

export interface SongsState {
  list: fromSongList.SongListState;
  errors: fromErrors.ErrorsState;
}

export const reducers: ActionReducerMap<SongsState> = {
  list: fromSongList.reducer,
  errors: fromErrors.reducer,
};

// 1 Feature Selector
const selectFeature = createFeatureSelector<SongsState>(FEATURE_NAME);

// 2 One per branch
const selectSongListBranch = createSelector(selectFeature, (f) => f.list);
export const selectErrorsBranch = createSelector(
  selectFeature,
  (f) => f.errors,
);
// 3 Helpers
const { selectAll: selectAllSongListEntityArray } =
  fromSongList.adapter.getSelectors(selectSongListBranch);

// 4 What the component needs

export const selectSongListModel = createSelector(
  selectAllSongListEntityArray,
  (songs) => {
    const model: SongListModel = {
      songs,
    };
    return model;
  },
);
