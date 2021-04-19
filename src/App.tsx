import { Provider } from 'react-redux';

import store from './store';

import Repositories from './components/Reposistories';

function App() {
  return (
    <Provider store={store}>
      <Repositories />
    </Provider>
  );
}

export default App;
