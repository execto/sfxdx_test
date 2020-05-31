import { AsyncState } from '../models/async';

export enum AsyncActions {
  pokemon,
  pokemonList,
  pokemonAbility,
}

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
