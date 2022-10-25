import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor() {}

  @ViewChild('alertTemplate') displayedAlert!: ElementRef<HTMLDivElement>;
  @ViewChild('daButton') theButton!: ElementRef<HTMLButtonElement>;
  @Input() alert: AlertTypes = 'info';

  @Input() dismissable = false;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input() message = 'Alert';

  @Output() dismissed = new EventEmitter<string>();

  onDismiss() {
    // this.theButton.nativeElement.classList.add('btn-lg');
    this.dismissed.emit(
      `They Dismissed the alert with the message ${this.message} `,
    );
    this.displayedAlert.nativeElement.remove();
    // console.log(this.displayedAlert);
  }
}

export type AlertTypes =
  | 'danger'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info';
