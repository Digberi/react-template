import { PaletteMode, PaletteOptions } from '@mui/material';
import { ColorMode } from '@types';

export const MuiPallettes: Record<PaletteMode, PaletteOptions> = {
  [ColorMode.LIGHT]: {
    mode: ColorMode.LIGHT
  },
  [ColorMode.DARK]: {
    mode: ColorMode.DARK
  }
};
