import { CFC } from '@types';
import { BrowserRouter } from 'react-router-dom';

import { ModeProvider } from './mode';
import { MuiProvider } from './mui';
import { SnackbarProvider } from './snack-bar';
import { StoreProvider } from './store';

const base = import.meta.env.BASE_URL;

export const Sandwich: CFC = ({ children }) => {
  return (
    <BrowserRouter basename={base}>
      <StoreProvider>
        <ModeProvider>
          <MuiProvider>
            <SnackbarProvider>{children}</SnackbarProvider>
          </MuiProvider>
        </ModeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};
