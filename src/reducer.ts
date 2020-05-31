import { combineReducers } from 'redux';
import pokemons from './reducers/pokemonsReducer';
import async from './reducers/asyncReducer';

export default combineReducers({
  async,
  pokemons,
});
