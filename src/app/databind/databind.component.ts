import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css'],
})
export class DatabindComponent implements OnInit {
  myField = '2-way data binding';
  buttonText = 'Click me!';
  enabled = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEnabledFlag() {
    this.enabled = !this.enabled;
  }
}
