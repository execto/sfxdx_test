import { Pokemons } from './pokemon';
import { AsyncState } from './async';

export type MainState = {
  async: AsyncState;
  pokemons: Pokemons;
};
