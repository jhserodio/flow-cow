import { ADD_COW, REMOVE_COW } from '../constants/cows/types';
import initialState from '../constants/cows/state';

const cows = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COW:
      return Object.assign({}, state, {
        [action.cow.id]: action.cow,
      })
    case REMOVE_COW:
      const cows = Object.assign({}, state);
      delete cows[action.cow.id];
      return cows;
    default:
      return state
  }
}

export default cows;