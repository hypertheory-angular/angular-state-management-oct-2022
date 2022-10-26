import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  SongCreate,
  SongListEvents,
} from '../../state/actions/song-list.actions';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  form = new FormGroup<MappedFormData<SongCreate>>({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ],
    }),
    artist: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
      ],
    }),
    album: new FormControl<string>('', { nonNullable: true }),
  });
  constructor(private store: Store) {}

  get title() {
    return this.form.controls.title;
  }
  get artist() {
    return this.form.controls.artist;
  }

  addSong(foci: HTMLInputElement) {
    if (this.form.valid) {
      const payload: SongCreate = this.form.value as SongCreate;
      this.store.dispatch(SongListEvents.created({ payload }));
      this.form.reset();
      foci.focus();
    } else {
      console.log('No go. It is isnt valid');
    }
  }
}

// this is super cool. You should totally steal this and pretend like you invented it when you show your team.

type MappedFormData<Type> = {
  // todo - fix this.
  [Property in keyof Type]: FormControl<Type[Property]>;
};
