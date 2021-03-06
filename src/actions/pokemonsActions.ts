import { createAction } from './helper';
import { apiUrl, ApiService } from '../services/ApiService';
import {
  PokemonsListActions,
  PokemonActions,
  PokemonAbilityActions,
} from '../constants/actionTypes';

export const getPokemonList = () => {
  const loadStart = createAction(PokemonsListActions.POKEMONS_LIST_LOADING);

  const loadSuccess = (list) =>
    createAction(PokemonsListActions.POKEMINS_LIST_LOADED, {
      pokemonList: list,
    });

  const loadError = createAction(PokemonsListActions.POKEMONS_LIST_LOAD_ERROR);

  const asyncAction = {
    actions: [loadStart, loadSuccess, loadError],
    apiCall: () => fetch(`${apiUrl}/pokemon?limit=20`),
  };

  return ApiService.request(asyncAction);
};

export const getPokemon = (name: string) => {
  const loadStart = createAction(PokemonActions.POKEMON_LOADING);

  const loadSuccess = (pokemon) =>
    createAction(PokemonActions.POKEMIN_LOADED, {
      pokemon,
    });

  const loadError = createAction(PokemonActions.POKEMON_LOAD_ERROR);

  const asyncAction = {
    actions: [loadStart, loadSuccess, loadError],
    apiCall: () => fetch(`${apiUrl}/pokemon/${name}`),
  };

  return ApiService.request(asyncAction);
};

export const getPokemonAbility = (abilityName: string) => {
  const loadStart = createAction(PokemonAbilityActions.ABILITY_LOADING);

  const loadSuccess = (ability) =>
    createAction(PokemonAbilityActions.ABILITY_LOADED, {
      ability,
    });

  const loadError = createAction(PokemonAbilityActions.ABILITY_LOAD_ERROR);

  const asyncAction = {
    actions: [loadStart, loadSuccess, loadError],
    apiCall: () => fetch(`${apiUrl}/ability/${abilityName}`),
  };

  return ApiService.request(asyncAction);
};

export const searchPokemons = (value: string) =>
  createAction(PokemonsListActions.SEARCH_POKEMONS, { value });
