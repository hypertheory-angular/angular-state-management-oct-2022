import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import { SongsFeatureEvents } from '../actions/feature.actions';
import { SongListCommands } from '../actions/song-list.actions';
@Injectable()
export class FeatureEffects {
  // map feature events to commmands.

  // for example, we are going to say here "when the feature is entered, go load the songs."
  onEnterLoadSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongsFeatureEvents.entered),
      map(() => SongListCommands.load()),
    );
  });

  constructor(private actions$: Actions) {}
}
