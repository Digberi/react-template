import { Box, Button, Typography } from '@mui/material';
import { CounterStore } from '@store';
import { injector } from '@store/injector/injector.hoc';
import { InjectedFC } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  counter: CounterStore
};

interface TestViewProps {
  text: string;
}

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
