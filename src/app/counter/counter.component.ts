import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'mx-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {

  @Input("StartValue")
  initialValue: number = 0;

  counter: number = 0;

  @Output("CountChanged")
  private countEmitter = new EventEmitter<{ count: number }>();

  constructor(private logService: LoggingService, private dataService: DataService) { }

  ngOnInit(): void {
    this.counter = this.initialValue;
  }

  increment() {
    this.logService.log("Counter increments!")
    //this.countEmitter.emit({count: ++this.counter})

    //talking via a service
    this.dataService.setCounter(++this.counter);
  }

}
