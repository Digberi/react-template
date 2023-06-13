import { Test } from '@components/test';
import { Layout } from '@layout';
import { Sandwich } from '@providers/sandwich';

export const App = () => {
  return (
    <Sandwich>
      <Layout>
        <Test />
      </Layout>
    </Sandwich>
  );
};
