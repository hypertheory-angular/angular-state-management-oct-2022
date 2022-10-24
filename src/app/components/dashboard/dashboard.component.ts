import { Component } from '@angular/core';
import { AlertTypes } from 'src/app/features/ui/components/alert/alert.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor() {}

  thing = 'Go On Break!';
  alertsToShow: {
    message: string;
    alert: AlertTypes;
    dismissable: boolean;
  }[] = [
    {
      message: 'Is it break time yet?',
      alert: 'info',
      dismissable: true,
    },
    {
      message: 'Getting Close',
      alert: 'danger',
      dismissable: false,
    },
  ];

  theyDismissed(message: string) {
    console.log(message);
  }
}
