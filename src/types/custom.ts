import { FC, PropsWithChildren } from 'react';

export type CFC<Props = {}> = FC<PropsWithChildren<Props>>;

export enum ColorMode {
  LIGHT = 'light',
  DARK = 'dark'
}
