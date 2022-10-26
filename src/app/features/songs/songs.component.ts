import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SongsFeatureEvents } from './state/actions/feature.actions';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent {
  constructor(store: Store) {
    store.dispatch(SongsFeatureEvents.entered());
  }
}
