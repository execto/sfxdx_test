import { createStore } from 'redux';
import reducer from './reducer';
import { MainState } from './models/store';
import { prepareAsyncState } from './storeSettings/asyncSettings';

const preloadedState: MainState = {
  asyncState: prepareAsyncState(),
  pokemons: {},
};

const store = createStore(reducer, preloadedState);

export default store;
