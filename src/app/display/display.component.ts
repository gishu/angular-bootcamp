import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'mx-display',
  templateUrl: "./display.component.html",
  styles: [],
  providers:[LoggingService]
})
export class DisplayComponent {

  value : number = 0;
  
  constructor(private logService : LoggingService) { }

  setValue(count : number){
    this.logService.log("DC:setValue called!")
    this.value = count;
  }

}
