import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  providers: [LoggingService]

})
export class Component2Component implements OnInit {

  constructor(private logService : LoggingService) { }

  ngOnInit(): void {
    this.logService.setOwner("Comp1");
  }

  logMessage(msg : string){
    this.logService.log(msg);
  }
}
