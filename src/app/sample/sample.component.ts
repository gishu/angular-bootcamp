import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-sample',
  template: `
    <p>
      Sample Component works!
    </p>
  `,
  styles: [
  ]
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
