import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  key = 'operation_history';

  saveOperationHistory(obj) {
    console.log(new Date());
//    let str = "test";
    console.log(JSON.stringify(obj));
  }
}
