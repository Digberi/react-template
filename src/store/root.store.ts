import { ConstructorOfValues } from '@types';
import { makeAutoObservable } from 'mobx';

import { CounterStore } from './counter.store';
import { UserStore } from './example';
import { SnackStore } from './snack.store';

export class RootStore {
  static map: Map<ConstructorOfValues<RootStore>, keyof RootStore> = new Map();

  /** @example */
  userStore: UserStore;

  counterStore: CounterStore;
  snackStore: SnackStore;

  constructor() {
    this.userStore = new UserStore(this);

    this.counterStore = new CounterStore(this);
    this.snackStore = new SnackStore(this);

    makeAutoObservable(this);
    for (const [key, value] of Object.entries(this)) {
      RootStore.map.set(value.constructor.prototype.constructor, key as keyof RootStore);
    }
  }
}
