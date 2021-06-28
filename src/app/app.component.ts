import { Component, ViewChild } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bootcamp';

  x10 = 10;

  setDisplay(displayComponent: DisplayComponent, event : { count: number} ){
    console.log("AppComponent notified that Count is now " + event.count);
    displayComponent.setValue(event.count)
    
  }
}
