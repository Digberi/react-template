import { CFC } from '@types';

import { ModeProvider } from './mode';

export const Sandwich: CFC = ({ children }) => {
  return <ModeProvider>{children}</ModeProvider>;
};
