export type Pokemon = {
  name: string;
  type: string;
  abilities: [];
};

export type Pokemons = {
  [name: string]: Pokemon;
};
