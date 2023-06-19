/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react';

import type { getAccount, getNetwork, getPublicClient, getWalletClient } from 'wagmi/actions';

export type CFC<Props = {}> = FC<PropsWithChildren<Props>>;
export type InjectedFC<StoresMap, Props = {}> = FC<Props & Stores<StoresMap>>;
export type InjectedCFC<StoresMap, Props = {}> = CFC<Props & Stores<StoresMap>>;
export type WithStores<StoresMap, Props = {}> = InjectedFC<StoresMap, Props>;

export enum ColorMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export type Prettify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends number
    ? number
    : T[K] extends boolean
    ? boolean
    : T[K] extends object
    ? Prettify<T[K]>
    : T[K];
} & {};

export type Instance<T> = T extends new (...args: any[]) => infer R ? R : never;

export type Constructor<T> = new (...args: any[]) => T;

export type Stores<T> = {
  [K in keyof T]: Instance<T[K]>;
};

export type UnionToUnionOfConstructors<T> = T extends any ? Constructor<T> : never;

type Values<Type extends Object> = Type[keyof Type];
export type ConstructorOfValues<Type extends Object> = UnionToUnionOfConstructors<Values<Type>>;

export type StoresMap<Type extends Object> = Record<string, ConstructorOfValues<Type>>;

export type Account = ReturnType<typeof getAccount>;
export type WClient = Awaited<ReturnType<typeof getWalletClient>>;
export type PClient = ReturnType<typeof getPublicClient>;
export type Network = ReturnType<typeof getNetwork>;
