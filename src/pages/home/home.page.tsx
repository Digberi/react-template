import { Users } from '@components/example/users';
import { Test } from '@components/test';
import { TestForm } from '@components/test-form';
import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 5
      }}
    >
      <Typography variant="h1">Home Page</Typography>
      <Test text="Counter" />
      <TestForm
        initialValues={{
          email: '',
          password: ''
        }}
      />
      <Users />
    </Box>
  );
};
