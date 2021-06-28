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

  // definite property assignment - override strict prop initialization rules
  @ViewChild(DisplayComponent)
  private childComponent! : DisplayComponent;

  onCountChanged($event : { count : number}){
    console.log("AppComponent notified that Count is now " + $event.count);
    this.childComponent.setValue($event.count)
  }
}
