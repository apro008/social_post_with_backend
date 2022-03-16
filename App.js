import React from 'react';

import Navigation from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
