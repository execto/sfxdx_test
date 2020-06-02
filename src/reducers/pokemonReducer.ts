import { PokemonActions } from '../constants/actionTypes';
import { Action } from '../models/actions';

export default (state: any = {}, action: Action) => {
  switch (action.type) {
    case PokemonActions.POKEMIN_LOADED:
      return {
        isLoading: false,
        hasError: false,
        ...action.payload,
      };
    case PokemonActions.POKEMON_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case PokemonActions.POKEMON_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
