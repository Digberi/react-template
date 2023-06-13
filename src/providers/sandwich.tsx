import { CFC } from '@types';
import { BrowserRouter } from 'react-router-dom';

import { ModeProvider } from './mode';
import { MuiProvider } from './mui';
import { StoreProvider } from './store';

const base = import.meta.env.BASE_URL;

export const Sandwich: CFC = ({ children }) => {
  console.log(import.meta);

  return (
    <BrowserRouter basename={base}>
      <StoreProvider>
        <ModeProvider>
          <MuiProvider>{children}</MuiProvider>
        </ModeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};
