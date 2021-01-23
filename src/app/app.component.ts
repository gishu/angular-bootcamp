import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'angular-bootcamp';

  x10 = 10;

}
