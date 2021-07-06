import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'mx-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  value: number = 0;
  subscription: Subscription | any;

  constructor(private notifier: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notifier.countNotifications$.subscribe( newCount => {
      console.log("Notified <<< " + newCount);
      this.value = newCount;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
