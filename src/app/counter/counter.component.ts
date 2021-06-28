import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input("StartValue")
  initialValue: number = 0;

  counter : number = 0;

  @Output("CountChanged")
  private countEmitter = new EventEmitter<{ count: number }>();

  constructor() { }

  ngOnInit(): void {
    this.counter = this.initialValue;
  }

  increment(){
    this.countEmitter.emit({count: ++this.counter})
  }
}
