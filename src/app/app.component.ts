import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedDataService]
})
export class AppComponent {
  title = 'ng-bootcamp';

  constructor(private dataService : SharedDataService){}

  ngOnInit(){
    this.dataService.setOwner("AppComponent")
  }
}
