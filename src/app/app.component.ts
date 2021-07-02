import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-bootcamp';
  enableText = true;
  toggles: string[] = [];

  toggleFlag() {
    this.toggles.push(String(this.enableText));
    this.enableText = !this.enableText;
  }

  getBGColor() {
    return {
      'font-style': 'italic',
      'font-size.em': 2,
      'background-color': this.enableText ? 'beige' : 'salmon',
    };
  }

  getClasses() {
    return {
      info: this.enableText,
      warning: !this.enableText,
    };
  }

  getStripe(i: number) {
    console.log("getstripe" + i);
    return (i % 2 === 0 ? 'transparent': 'lightgray');
  }
}
