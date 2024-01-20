import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn : "root"
  })
export class HeaderService {

  private stack = new BehaviorSubject('');
  private searchedTopic = new BehaviorSubject('');

  getSelectedStack = this.stack.asObservable();
  getSearchedTopic = this.searchedTopic.asObservable();

  constructor() { }

  setSelectedStack(stack: string){
    this.stack.next(stack);
  }

  setSearchedTopic(value:string){
    this.searchedTopic.next(value);
  }
}
