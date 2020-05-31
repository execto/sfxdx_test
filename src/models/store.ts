import { Pokemons } from './pokemon';
import { AsyncState } from './async';

export type MainState = {
  asyncState: AsyncState;
  pokemons: Pokemons;
};
