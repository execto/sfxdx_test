import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { MainState } from './models/store';
import pokemonsMiddleware from './middlewares/pokemonsMiddleware';

const preloadedState: MainState = {
  pokemonAbility: {},
  pokemon: {},
  pokemons: {},
};

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(thunk, pokemonsMiddleware)
);

export default store;
