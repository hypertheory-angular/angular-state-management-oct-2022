import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor() {}

  @Input() alert: AlertTypes = 'info';

  @Input() dismissable = false;

  @Input() message = 'Alert';

  @Output() dismissed = new EventEmitter<string>();

  onDismiss() {
    this.dismissed.emit(
      `They Dismissed the alert with the message ${this.message} `,
    );
  }
}

export type AlertTypes =
  | 'danger'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info';
