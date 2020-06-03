import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import PokemonsListPage from './components/pages/PokemonsListPage';
import PokemonPage from './components/pages/PokemonPage';
import PokemonAbilityPage from './components/pages/PokemonAbilityPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonsListPage />
        </Route>
        <Route exact path="/pokemon/:name">
          <PokemonPage />
        </Route>
        <Route exact path="/ability/:name">
          <PokemonAbilityPage />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
