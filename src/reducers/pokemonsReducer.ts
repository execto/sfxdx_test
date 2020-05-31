import { MainActions } from '../constants/actionTypes';
import { Action } from '../models/actions';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case MainActions.POKEMON_LIST:
      return {
        ...action.payload,
      };
    case MainActions.POKEMON:
      return state;
    case MainActions.POKEMON_ABILITY:
      return state;
    default:
      return state;
  }
};
