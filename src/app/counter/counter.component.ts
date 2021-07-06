import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'mx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input('StartValue')
  initialValue: number = 0;

  counter: number = 0;

  
  constructor(private notifier: NotificationService) {}

  ngOnInit(): void {
    this.counter = this.initialValue;
  }

  increment() {
    console.log("Incremented from " + this.counter);
    
    this.notifier.setCount(++this.counter);
  }
}
