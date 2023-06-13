import { Box, Button, Typography } from '@mui/material';
import { useMode } from '@providers/mode';

export const Test = () => {
  const { mode, toggleMode } = useMode();

  return (
    <Box>
      <Button color="success" onClick={toggleMode}>
        Toggle Mode
      </Button>
      <Typography>{mode}</Typography>
    </Box>
  );
};
