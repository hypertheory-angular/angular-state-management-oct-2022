import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
  ],
})
export class AuthModule {}
