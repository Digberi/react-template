import { Test } from '@components/test';
import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Box>
      <Typography variant="h1">Home Page</Typography>
      <Test text="Counter" />
    </Box>
  );
};
