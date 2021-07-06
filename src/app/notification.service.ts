import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  countChanged = new Subject<number>();
  countNotifications$ = this.countChanged.asObservable();

  constructor() { }

  //notify listeners
  setCount(newCount : number){
    this.countChanged.next(newCount);
  }
}
