import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  myField = "2-way data binding";
  buttonText = "Click me!";
  enabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEnabledFlag() {
    this.enabled = !this.enabled;
  }

}
