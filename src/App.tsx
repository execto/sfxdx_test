import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonsListPage />
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
          <Route exact path="/pokemon-ability">
            <PokemonAbilityPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
