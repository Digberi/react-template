import { WagmiStore } from '@store/wagmi.store.ts';
import { ConstructorOfValues } from '@types';
import { makeAutoObservable } from 'mobx';

import { CounterStore } from './counter.store';
import { UserStore } from './example';
import { SnackStore } from './snack.store';

export class RootStore {
  static map: Map<ConstructorOfValues<RootStore>, keyof RootStore> = new Map();

  /** @example */
  userStore = new UserStore();

  counterStore = new CounterStore();
  snackStore = new SnackStore();

  wagmiStore = new WagmiStore();

  constructor() {
    makeAutoObservable(this);

    for (const [key, value] of Object.entries(this)) {
      RootStore.map.set(value.constructor.prototype.constructor, key as keyof RootStore);
    }
  }
}
