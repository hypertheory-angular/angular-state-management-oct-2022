import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorsBranch } from '../../state';
import { SongsFeatureEvents } from '../../state/actions/feature.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css'],
})
export class ErrorDisplayComponent {
  model$ = this.store.select(selectErrorsBranch);
  constructor(private store: Store) {}

  clearError() {
    this.store.dispatch(SongsFeatureEvents.errordismissed());
  }
}
