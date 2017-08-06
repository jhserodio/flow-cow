import { ADD_COW, REMOVE_COW } from '../constants/cows/types';
import initialState from '../constants/cows/state';

const cows = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COW:
      const cows = state.slice();
      cows.push(action.cow)
      return cows;
    case REMOVE_COW:
      return state.filter(
        item => item.id !== action.id
      );
    default:
      return state
  }
}

export default cows;