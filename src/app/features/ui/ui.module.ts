import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { TimedRemoveDirective } from './directives/timed-remove.directive';

@NgModule({
  declarations: [
    AlertComponent,
    TimedRemoveDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    TimedRemoveDirective,
  ],
})
export class UiModule {}
