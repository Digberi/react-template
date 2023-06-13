import { CFC } from '@types';

import { ModeProvider } from './mode';
import { MuiProvider } from './mui';

export const Sandwich: CFC = ({ children }) => {
  return (
    <ModeProvider>
      <MuiProvider>{children}</MuiProvider>
    </ModeProvider>
  );
};
