import React, { useReducer } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { Store } from '../store';

import modules from '../store/modules';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const { Provider } = Store;

export default function Routes() {
  const store = useReducer(modules, { user: { logged_in: false } });

  return (
    <Provider value={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </Provider>
  );
}
