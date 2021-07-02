import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bootcamp';
  enableText = true;
  
  toggleFlag(){
    this.enableText = !this.enableText;
  }
}
