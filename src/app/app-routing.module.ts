import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DumbCounterComponent } from './components/dumb-counter/dumb-counter.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'counter',
    component: DumbCounterComponent,
  },
  {
    path: 'redux-counter',
    loadChildren: () =>
      import('./features/redux-counter/redux-counter.module').then(
        // do this for module code splitting.
        (m) => m.ReduxCounterModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Eagerly loading lazy modules
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
