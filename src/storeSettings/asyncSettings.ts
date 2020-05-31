import { AsyncState } from '../models/async';

export const AsyncActions = {
  pokemon: 'pokemon',
  pokemonList: 'pokemonList',
  pokemonAbility: 'pokemonAbility',
};

export const prepareAsyncState = (): AsyncState => {
  const asyncState = Object.keys(AsyncActions).reduce((state, action) => {
    const stateItem: AsyncState = {
      [action]: {
        inProcess: false,
        error: false,
      },
    };

    return { ...state, ...stateItem };
  }, {});

  return asyncState;
};
