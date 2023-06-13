import { createContext } from 'react';

import { PaletteMode } from '@mui/material';
import { ColorMode } from '@types';

interface ColorModeContext {
  toggleMode: () => void;
  mode: PaletteMode;
}

export const ModeContext = createContext<ColorModeContext>({
  toggleMode: () => {
    return;
  },
  mode: ColorMode.LIGHT
});
