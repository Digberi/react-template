import { CFC } from '@types';

import { ModeProvider } from './mode';
import { MuiProvider } from './mui';
import { StoreProvider } from './store';

export const Sandwich: CFC = ({ children }) => {
  return (
    <StoreProvider>
      <ModeProvider>
        <MuiProvider>{children}</MuiProvider>
      </ModeProvider>
    </StoreProvider>
  );
};
