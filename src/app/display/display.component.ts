import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  value: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setValue(count: number) {
    this.value = count;
  }
}
