import { AsyncState } from './common';

export type Pokemon = {
  name: string;
};

export interface PokemonInfo extends Pokemon, AsyncState {
  types: string[];
  height: number;
  weight: number;
  experience: number;
  abilities: [];
  imgUrl: string;
}

export interface PokemonAbility extends AsyncState {
  name: string;
  description: string;
  pokemons: string[];
}

export interface Pokemons extends AsyncState {
  pokemons: Pokemon[];
}
