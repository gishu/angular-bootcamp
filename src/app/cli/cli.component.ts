import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'mx-cli',
  // selector: '[mx-cli]',
  selector: '.mx-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
