export class LoggingService {
  private _owner: string = '';

  constructor() { }

  setOwner(owner : string){
    this._owner = owner;
  }

  log(message : string){
    console.log( this._owner + message);
  }
}
