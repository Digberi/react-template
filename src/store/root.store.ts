import { ConstructorOfValues } from '@types';
import { makeAutoObservable } from 'mobx';

export class CounterStore {
  count = 0;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export class CounterStore2 {
  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }
}

export class RootStore {
  static map: Map<ConstructorOfValues<RootStore>, keyof RootStore> = new Map();

  counterStore: CounterStore;
  counterStore2: CounterStore2;
  constructor() {
    this.counterStore = new CounterStore(this);
    this.counterStore2 = new CounterStore2(this);

    makeAutoObservable(this);
    for (const [key, value] of Object.entries(this)) {
      RootStore.map.set(value.constructor.prototype.constructor, key as keyof RootStore);
    }
  }
}
