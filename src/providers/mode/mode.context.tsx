import { createContext } from 'react';

import { PaletteMode } from '@mui/material';
import { ColorMode } from '@types';

interface ColorModeContext {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ModeContext = createContext<ColorModeContext>({
  toggleColorMode: () => {
    return;
  },
  mode: ColorMode.LIGHT
});
