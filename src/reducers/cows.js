// @flow
import initialState, { type cowState } from '../constants/cowState';
import { type CowAction } from '../actions/cows';

const cows = (state: Array<cowState> = initialState, action: CowAction): Array<cowState> => {
  switch (action.type) {
    case 'ADD_COW':
      const cows = state.slice();
      cows.push(action.cow)
      return cows;
    case 'REMOVE_COW':
      return state.filter(
        item => item.id !== action.id
      );
    default:
      return state
  }
}

export default cows;