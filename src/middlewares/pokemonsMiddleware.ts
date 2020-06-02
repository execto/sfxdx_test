import { Action } from '../models/actions';
import { PokemonsListActions, PokemonActions } from '../constants/actionTypes';
import { Pokemon, PokemonInfo } from '../models/pokemon';

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

  if (action.type === PokemonActions.POKEMIN_LOADED) {
    const {
      name,
      types,
      abilities,
      height,
      weight,
      base_experience: experience,
      sprites,
    } = action.payload.pokemon;
    const typesUI = types.map((type) => type.type.name);
    const abilitiesUI = abilities.map((ability) => ability.ability.name);
    const pokemon: Omit<PokemonInfo, 'isLoading' | 'hasError'> = {
      name,
      types: typesUI,
      abilities: abilitiesUI,
      height,
      weight,
      experience,
      imgUrl: sprites.front_default,
    };

    return next({
      ...action,
      payload: pokemon,
    });
  }

  return next(action);
};

export default pokemonsMiddleware;
