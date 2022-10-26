import { SongEntity } from '../state/reducers/song-list.reducer';

export type SongListModel = {
  songs: SongListItemModel[];
};

export type SongListItemModel = SongEntity;
