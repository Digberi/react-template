import { useContext } from 'react';

import { ContextNotExistError } from '@errors';

import { ModeContext } from './mode.context';
import { ModeProvider } from './mode.provider';

export const useMode = () => {
  const context = useContext(ModeContext);

  if (context === undefined) {
    throw new ContextNotExistError(useMode.name, ModeProvider.name);
  }

  return context;
};
