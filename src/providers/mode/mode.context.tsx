import { createContext } from 'react';

import { PaletteMode } from '@mui/material';

interface ColorModeContext {
  toggleMode: () => void;
  mode: PaletteMode;
}

export const ModeContext = createContext<ColorModeContext | undefined>(undefined);
