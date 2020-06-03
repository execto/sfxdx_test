import { Action } from '../models/actions';
import { PokemonAbilityActions } from '../constants/actionTypes';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case PokemonAbilityActions.ABILITY_LOADED:
      return {
        ...action.payload,
        isLoading: false,
        hasError: false,
      };
    case PokemonAbilityActions.ABILITY_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case PokemonAbilityActions.ABILITY_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
