import { HttpClient } from '@angular/common/http';
import { TaggedTemplateExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import {
  SongListCommands,
  SongListDocuments,
} from '../actions/song-list.actions';
import { SongEntity } from '../reducers/song-list.reducer';

@Injectable()
export class SongListEffects {
  readonly url = 'http://localhost:1337/songs/'; // TODO: THIS IS BAD, don't hard code. We will fix this.

  loadTheSongs$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SongListCommands.load), // when we are told to load the songs
        switchMap(() =>
          // switch over to another observable stream.
          this.httpClient.get<{ data: SongEntity[] }>(this.url).pipe(
            map((r) => r.data),
            map((payload) => SongListDocuments.songs({ payload })),
          ),
        ),
      );
    },
    { dispatch: true },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient,
  ) {}
}
