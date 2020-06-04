import { Action } from '../models/actions';
import { PokemonsListActions } from '../constants/actionTypes';
import { Pokemon } from '../models/pokemon';

export default (state: any = {}, action: Action) => {
  switch (action.type) {
    case PokemonsListActions.POKEMINS_LIST_LOADED:
      return {
        isLoading: false,
        hasError: false,
        pokemons: action.payload,
        cashedPokemons: action.payload,
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
    case PokemonsListActions.SEARCH_POKEMONS: {
      const searchValue = (action.payload.value as string).toLowerCase();
      const filteredPokemons = (state.cashedPokemons as Pokemon[]).filter(
        (pokemon) => pokemon.name.indexOf(searchValue) > -1
      );
      return {
        ...state,
        pokemons: filteredPokemons,
      };
    }
    default:
      return state;
  }
};
