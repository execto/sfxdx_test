import { PokemonInfo, PokemonAbility, Pokemons } from './pokemon';

export type MainState = {
  pokemonAbility: PokemonAbility | {};
  pokemon: PokemonInfo | {};
  pokemons: Pokemons | {};
};
