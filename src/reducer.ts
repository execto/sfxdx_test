import { combineReducers } from 'redux';
import pokemons from './reducers/pokemonsReducer';
import pokemon from './reducers/pokemonReducer';
import pokemonAbility from './reducers/pokemonAbilityReucer';

export default combineReducers({
  pokemonAbility,
  pokemon,
  pokemons,
});
