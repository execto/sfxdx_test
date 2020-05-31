import { Action } from '../models/actions';

export const createAction = (type: string, payload?: any): Action => {
  const action = {
    type,
    payload: payload || null,
  };

  return action;
};

export const makeActionCreator = (action: Action) => {
  if (!action) {
    return null;
  }

  if (typeof action === 'function') {
    return action;
  }

  return () => createAction(action.type, action.payload || null);
};
