import { createAction } from './helper';
import { AsyncActions } from '../storeSettings/asyncSettings';
import { AsyncActionsTypes, MainActions } from '../constants/actionTypes';
import { apiUrl, ApiService } from '../services/ApiService';

export const getPokemonList = () => {
  const loadStart = createAction(AsyncActionsTypes.LOAD_START, {
    asyncAction: AsyncActions.pokemonList,
  });

  const loadSuccess = (list) =>
    createAction(MainActions.POKEMON_LIST, { pokemonList: list });

  const loadError = createAction(AsyncActionsTypes.LOAD_ERROR, {
    asyncAction: AsyncActions.pokemonList,
  });

  const asyncAction = {
    actions: [loadStart, loadSuccess, loadError],
    apiCall: () => fetch(`${apiUrl}/pokemon?limit=20`),
  };

  return ApiService.request(asyncAction);
};

export const getPokemon = () => {};

export const getPokemonAbility = () => {};
