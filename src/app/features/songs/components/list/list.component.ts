import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSongListModel } from '../../state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  model$ = this.store.select(selectSongListModel);
  constructor(private store: Store) {}
}
