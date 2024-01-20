import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn : "root"
  })
export class HeaderService {

  private stack = new BehaviorSubject('');
  getSelectedStack = this.stack.asObservable();

  constructor() { }

  setSelectedStack(stack: string){
    this.stack.next(stack);
  }
}
