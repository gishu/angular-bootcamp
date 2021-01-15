import { Component, ViewChild } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'angular-bootcamp';

  x10 = 10;

  @ViewChild(DisplayComponent)
  private childComponent : DisplayComponent;

  onCountChanged($event : { count : number}){
    console.log("AppComponent notified that Count is now " + $event.count);
    this.childComponent.setValue($event.count)
  }
}
