import { Component } from '@angular/core';
import { NotificationService } from '../notification/notification.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private notificationService: NotificationService) { }

  showNotification(buttonId: string) {
    if (buttonId === 'button1') {
      this.notificationService.showInfoNotification('Button 1 is clicked');
    } else if (buttonId === 'button2') {
      this.notificationService.showInfoNotification('Button 2 is clicked');
    }
  }
}

