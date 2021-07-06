
export class SharedDataService {
  private _owner: string = 'undefined';

  constructor() { }

  setOwner(owner: string){
    this._owner = owner;
  }
  log(message : string){
    console.log(this._owner + " says : " + message);
  }
}
