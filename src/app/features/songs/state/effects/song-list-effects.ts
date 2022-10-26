import { HttpClient } from '@angular/common/http';
import { TaggedTemplateExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap, tap } from 'rxjs';
import { SongsFeatureEvents } from '../actions/feature.actions';
import {
  SongListCommands,
  SongListDocuments,
  SongListEvents,
} from '../actions/song-list.actions';
import { SongEntity } from '../reducers/song-list.reducer';

@Injectable()
export class SongListEffects {
  readonly url = 'http://localhost:1337/songs/'; // TODO: THIS IS BAD, don't hard code. We will fix this.

  saveASong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongListEvents.created),
      concatMap((a) =>
        this.httpClient.post<SongEntity>(this.url, a.payload).pipe(
          map((payload) => SongListDocuments.song({ payload })),
          catchError((r) => {
            console.log(r);
            return of(
              SongsFeatureEvents.apierror({
                payload: 'Could Not Add That Song, Sorry!',
              }),
            );
          }),
        ),
      ),
    );
  });

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
