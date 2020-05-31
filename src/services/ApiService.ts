import { Dispatch } from 'redux';
import { makeActionCreator } from '../actions/helper';

export const apiUrl = 'https://pokeapi.co/api/v2';

export class ApiService {
  static request(asyncAction) {
    const { actions, shouldFetch, apiCall } = asyncAction;
    const [fetching, fetchSuccess, fetchError] = actions.map((action) =>
      makeActionCreator(action)
    );

    return (dispatch: Dispatch, getState) => {
      if (shouldFetch && shouldFetch(getState())) {
        return null;
      }

      dispatch(fetching());

      return apiCall()
        .then((res) => res.json())
        .then((res) => dispatch(fetchSuccess(res)))
        .catch((err) => {
          console.log(err);
          dispatch(fetchError());
        });
    };
  }
}
