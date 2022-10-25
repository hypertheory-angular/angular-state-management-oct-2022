import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountByComponent } from './components/count-by/count-by.component';
import { ReduxCounterComponent } from './redux-counter.component';

const routes: Routes = [
  {
    // redux-counter
    path: '',
    component: ReduxCounterComponent,
    children: [
      {
        // redux-counter/prefs
        path: 'prefs',
        component: CountByComponent,
      },
      {
        path: '**',
        redirectTo: 'prefs',
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReduxCounterRoutingModule {}
