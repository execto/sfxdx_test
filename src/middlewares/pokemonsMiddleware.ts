import { Action } from '../models/actions';
import {
  PokemonsListActions,
  PokemonActions,
  PokemonAbilityActions,
} from '../constants/actionTypes';
import { Pokemon, PokemonInfo, PokemonAbility } from '../models/pokemon';

const pokemonsMiddleware = () => (next) => (action: Action) => {
  if (action.type === PokemonsListActions.POKEMINS_LIST_LOADED) {
    const payload = action.payload.pokemonList;
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

  if (action.type === PokemonAbilityActions.ABILITY_LOADED) {
    const {
      name,
      effect_entries: effect,
      pokemon: pokemons,
    } = action.payload.ability;

    const pokemonsUI = pokemons.map((pokemon) => pokemon.pokemon.name);

    const abilityItem: Omit<PokemonAbility, 'isLoading' | 'hasError'> = {
      name,
      description: effect[0].short_effect,
      pokemons: pokemonsUI,
    };

    return next({
      ...action,
      payload: abilityItem,
    });
  }

  return next(action);
};

export default pokemonsMiddleware;
