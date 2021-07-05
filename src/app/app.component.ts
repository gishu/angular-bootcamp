import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-bootcamp';
  appProp = '42';
  items: number[] = [];

  alertCustomContent() {
    alert('Custom content has been projected!');
    this.appProp = '84';
  }
  addItem() {
    this.items.push(0);
  }
  removeItem(){
    this.items.pop();
  }
}
