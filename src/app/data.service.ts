import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggingService } from './logging.service';

// needed in order for dep to be injected
@Injectable()
export class DataService {

  private countChanged = new Subject<number>();
  countChanged$ = this.countChanged.asObservable();

  constructor(private logService: LoggingService) {
    this.logService.log("Service Dependency ready!")
  }

  setCounter(count: number) {
    this.countChanged.next(count);
  }
}
