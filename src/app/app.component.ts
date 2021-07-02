import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-bootcamp';
  enableText = true;

  toggleFlag() {
    this.enableText = !this.enableText;
  }

  getBGColor() {
    return {
      'font-style': 'italic',
      'font-size.em': 2,
      'background-color': (this.enableText? 'beige' : 'salmon'),
    };
  }

  getClasses(){
    return {
      'info' : this.enableText,
      'warning': !this.enableText
    }
  }
}
