import { useState, useMemo } from 'react';

import { PaletteMode, useMediaQuery } from '@mui/material';
import { CFC, ColorMode } from '@types';

import { ModeContext } from './mode.context';

export const ModeProvider: CFC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? ColorMode.DARK : ColorMode.LIGHT);
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT
        );
      },
      mode
    }),
    [mode]
  );

  return <ModeContext.Provider value={colorMode}>{children}</ModeContext.Provider>;
};
