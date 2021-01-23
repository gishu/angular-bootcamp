import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'mx-display',
  templateUrl: "./display.component.html",
  styles: []
})
export class DisplayComponent implements OnDestroy{

  value: number = 0;
  mySubscription : Subscription;

  constructor(private logService: LoggingService, private dataService: DataService) {
    
    this.mySubscription = this.dataService.countChanged$.subscribe(count =>{
      this.setValue(count)
    });
 
  }
  
  setValue(count: number) {
    this.logService.log("DC:setValue called!")
    this.value = count;
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
