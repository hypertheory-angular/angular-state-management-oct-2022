import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SongsComponent } from './songs.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'entry',
        component: EntryComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
