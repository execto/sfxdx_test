import { PokemonActions } from '../constants/actionTypes';
import { Action } from '../models/actions';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case PokemonActions.POKEMIN_LOADED:
      return state;
    case PokemonActions.POKEMON_LOADING:
      return state;
    case PokemonActions.POKEMON_LOAD_ERROR:
      return state;
    default:
      return state;
  }
};
