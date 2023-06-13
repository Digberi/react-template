import { Box, Button, Typography } from '@mui/material';
import { CounterStore } from '@store';
import { InjectedFC } from '@types';
import { injector } from '@utils';
import { observer } from 'mobx-react-lite';

interface TestViewProps {
  text: string;
}

const stores = {
  counter: CounterStore
};

const TestView: InjectedFC<typeof stores, TestViewProps> = ({ counter, text }) => {
  console.log(counter.count);

  return (
    <Box>
      <Typography>{text}</Typography>

      <Typography>{counter.count}</Typography>
      <Button color="success" onClick={() => counter.increment()}>
        Increment
      </Button>
      <Button color="error" onClick={() => counter.decrement()}>
        Decrement
      </Button>
    </Box>
  );
};

export const Test = injector(stores)(observer(TestView));
