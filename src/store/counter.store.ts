import { makeAutoObservable } from 'mobx';

import { RootStore } from './root.store';

export class CounterStore {
  count = 0;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
