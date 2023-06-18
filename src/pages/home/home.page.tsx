import { Box, Button, Typography } from '@mui/material';
import { Connector } from '@providers/wagmi/wagmi.provider';
import { useAccount, useConnect, useDisconnect, useWalletClient } from 'wagmi';

export const HomePage = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: Connector
  });
  const { disconnect } = useDisconnect();

  const { data: walletClient } = useWalletClient();

  console.log(walletClient);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 5
      }}
    >
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">{address}</Typography>
      <Button onClick={() => connect()} variant="contained">
        Connect
      </Button>
      <Button onClick={() => disconnect()} variant="contained">
        Disconnect
      </Button>

      <Button
        onClick={async () =>
          walletClient?.signMessage({
            message: 'Hello World'
          })
        }
        variant="contained"
      >
        Sign Message
      </Button>
    </Box>
  );
};
