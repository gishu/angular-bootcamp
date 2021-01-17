
export class LoggingService {

  constructor() {
    console.log("LoggingService instance created!" + new Date())
   }

  log(message : string){
    console.log("LoggingService says " + message)
  }
}
