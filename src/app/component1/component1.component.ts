import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers: [LoggingService]
})
export class Component1Component implements OnInit {

  constructor(private logService : LoggingService, private dataService : SharedDataService) { }

  ngOnInit(): void {
    this.logService.setOwner("Comp1");
  }

  logMessage(msg : string){
    this.logService.log(msg);
    this.dataService.log(msg);
  }
}
