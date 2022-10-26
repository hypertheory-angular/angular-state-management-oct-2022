import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { SongsRoutingModule } from './songs-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects } from './state/effects/feature.effects';
import { HttpClientModule } from '@angular/common/http';
import { SongListEffects } from './state/effects/song-list-effects';
@NgModule({
  declarations: [
    SongsComponent,
    OverviewComponent,
    ListComponent,
    EntryComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    HttpClientModule,
    EffectsModule.forFeature([
      FeatureEffects,
      SongListEffects,
    ]),
  ],
})
export class SongsModule {}
