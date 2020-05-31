export default (state, action) => {
  switch (action.type) {
    case 'POKEMONS_LIST':
      return pokemonsListReducer(state, action);
    case 'POKEMON':
      return pokemonReducer(state, action);
    case 'POKEMON_ABILITY':
      return pokemonAbilityReducer(state, action);
    default:
      return state;
  }
};
