import { useMemo } from 'react';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMode } from '@providers/mode';
import { CFC } from '@types';

import { MuiComponents } from './mui.components';
import { MuiPallettes } from './mui.palettes';

export const MuiProvider: CFC = ({ children }) => {
  const { mode } = useMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: MuiPallettes[mode],
        ...MuiComponents
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
