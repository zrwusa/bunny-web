import { ReactQueryExample } from '../components/examples/react-query';
import ReduxSagaExample from '../components/examples/redux-saga';

export const Examples = () => {
  return (
    <div>
      <ReduxSagaExample />
      <ReactQueryExample />
    </div>
  );
};

export default Examples;
