import { AsyncState } from './common';

export type Pokemon = {
  name: string;
};

export interface PokemonInfo extends Pokemon, AsyncState {
  type: string;
  height: number;
  weight: number;
  experience: number;
  abilitys: [];
}

export interface PokemonAbility extends AsyncState {
  name: string;
  description: string;
}

export interface Pokemons extends AsyncState {
  pokemons: Pokemon[];
}
