import { useMemo } from 'react';

import { useStore } from '@providers/store';
import { RootStore } from '@store';
import { StoresMap } from '@types';

export const useInjector = (stores: StoresMap<RootStore>) => {
  const rootStore = useStore();

  return useMemo(() => {
    const entries = Object.entries(stores);

    return entries.reduce((acc, [keyName, store]) => {
      const key = RootStore.map.get(store);
      if (!key) {
        throw new Error(`${store.name} is not initialized in ${RootStore.name}`);
      }

      return Object.assign(acc, { [keyName]: rootStore[key] });
    }, {});
  }, [rootStore, stores]);
};
