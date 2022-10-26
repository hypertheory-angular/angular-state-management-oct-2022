import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { SongsRoutingModule } from './songs-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';

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
  ],
})
export class SongsModule {}
