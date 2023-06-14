import { FC } from 'react';

import { UserDto } from '@models';
import { Card, CardContent, Typography } from '@mui/material';

interface UserCardProps {
  user: UserDto;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        margin: '1rem'
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: 16
          }}
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          sx={{
            fontSize: 14,
            marginBottom: 12
          }}
        >
          @{user.username}
        </Typography>
        <Typography variant="body2" component="p">
          Email: {user.email}
        </Typography>

        <Typography variant="body2" component="p">
          Amount: {user.amount.toString()}
        </Typography>
      </CardContent>
    </Card>
  );
};
