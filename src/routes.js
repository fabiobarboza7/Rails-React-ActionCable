import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Store } from './store';

import modules from './store/modules';

import Home from './pages/Home';

const { Provider } = Store;

export default function Routes() {
  const store = useReducer(modules, { user: {} });

  return (
    <Provider value={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
