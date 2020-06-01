import { Action } from '../models/actions';
import { PokemonsListActions } from '../constants/actionTypes';

export default (state: any = {}, action: Action) => {
  switch (action.type) {
    case PokemonsListActions.POKEMINS_LIST_LOADED:
      return {
        isLoading: false,
        hasError: false,
        pokemons: action.payload,
      };
    case PokemonsListActions.POKEMONS_LIST_LOADING:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case PokemonsListActions.POKEMONS_LIST_LOAD_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
