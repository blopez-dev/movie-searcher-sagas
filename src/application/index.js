import React from 'react';
import { Provider } from 'react-redux';
import Routing from './Routes';
import createStore from './store';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={createStore()}>
      <GlobalStyles>
        <Routing />
      </GlobalStyles>
    </Provider>
  );
}
export default App;
