import { MainActions } from '../constants/actionTypes';
import { Action } from '../models/actions';
import { Pokemons } from '../models/pokemon';

const pokemonsMiddleware = () => (next) => (action: Action) => {
  if (action.type === MainActions.POKEMON_LIST) {
    const payload = { ...action.payload.pokemonList };
    const pokemons = payload.results.reduce((acc, pokemon) => {
      const item: Pokemons = {
        [pokemon.name]: {
          name: pokemon.name,
          type: '',
          abilities: [],
        },
      };
      return { ...acc, ...item };
    }, {});

    return next({
      ...action,
      payload: pokemons,
    });
  }

  return next(action);
};

export default pokemonsMiddleware;
