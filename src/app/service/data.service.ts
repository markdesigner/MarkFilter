import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
result:any;
  constructor() { }
  tt(){
    console.log(this.result);
  }
}
