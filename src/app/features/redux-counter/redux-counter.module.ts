import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxCounterComponent } from './redux-counter.component';
import { ReduxCounterRoutingModule } from './redux-counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { CountByComponent } from './components/count-by/count-by.component';
@NgModule({
  declarations: [ReduxCounterComponent, CountByComponent],
  imports: [
    CommonModule,
    ReduxCounterRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
  ],
})
export class ReduxCounterModule {}
