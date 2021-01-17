import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-bootcamp';

  x10 = 10;

  @ViewChild(DisplayComponent)
  private childComponent : DisplayComponent ;

  onCountChanged($event : { count : number}){
    console.log("AppComponent notified that Count is now " + $event.count);
    this.childComponent.setValue($event.count)
  }

  ngOnInit(){
    console.log("OnInit: Don't access ViewChild here - " + this.childComponent);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit: ViewChild should be set now");
    console.log(this.childComponent);
  }

}
