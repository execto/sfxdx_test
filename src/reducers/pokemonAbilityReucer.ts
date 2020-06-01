import { Action } from '../models/actions';
import { PokemonAbilityActions } from '../constants/actionTypes';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case PokemonAbilityActions.ABILITY_LOADED:
      return state;
    case PokemonAbilityActions.ABILITY_LOADING:
      return state;
    case PokemonAbilityActions.ABILITY_LOAD_ERROR:
      return state;
    default:
      return state;
  }
};
