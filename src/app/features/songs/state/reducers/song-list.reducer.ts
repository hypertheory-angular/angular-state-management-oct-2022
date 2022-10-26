import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongListState extends EntityState<SongEntity> {}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(initialState);
