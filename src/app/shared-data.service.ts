import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class SharedDataService {

  constructor(private logger : LoggingService) { }

  setOwner(owner: string){
    this.logger.setOwner(owner) ;
  }
  log(message : string){
    this.logger.log(message);
  }
}
