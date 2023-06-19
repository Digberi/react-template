import { Box, Button, Typography } from '@mui/material';
import { WagmiStore } from '@store/wagmi.store.ts';
import { WithStores } from '@types';
import { withStores } from '@utils';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const HomePageView: WithStores<typeof stores> = ({ wagmi }) => {
  console.log('render');
  console.log(wagmi.chains);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 5
      }}
    >
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">{wagmi.account.address}</Typography>
      <Button onClick={async () => wagmi.connect()} variant="contained">
        Connect
      </Button>
      <Button onClick={async () => wagmi.disconnect()} variant="contained">
        Disconnect
      </Button>

      <Button
        onClick={async () =>
          wagmi.walletClient?.signMessage({
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

export const HomePage = withStores(stores)(observer(HomePageView));
