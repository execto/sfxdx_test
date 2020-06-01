import { Action } from '../models/actions';
import { PokemonsListActions } from '../constants/actionTypes';
import { Pokemon } from '../models/pokemon';

const pokemonsMiddleware = () => (next) => (action: Action) => {
  if (action.type === PokemonsListActions.POKEMINS_LIST_LOADED) {
    const payload = { ...action.payload.pokemonList };
    const pokemons = payload.results.reduce((acc, pokemon) => {
      const item: Pokemon = {
        name: pokemon.name,
      };
      return [...acc, item];
    }, []);
    return next({
      ...action,
      payload: pokemons,
    });
  }

  return next(action);
};

export default pokemonsMiddleware;
