import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxCounterComponent } from './redux-counter.component';

const routes: Routes = [
  {
    path: '',
    component: ReduxCounterComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReduxCounterRoutingModule {}
