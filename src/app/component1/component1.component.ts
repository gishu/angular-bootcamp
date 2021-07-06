import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers: [LoggingService]
})
export class Component1Component implements OnInit {

  constructor(private logService : LoggingService) { }

  ngOnInit(): void {
    this.logService.setOwner("Comp1");
  }

  logMessage(msg : string){
    this.logService.log(msg);
  }
}
