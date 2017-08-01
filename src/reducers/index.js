import { combineReducers } from 'redux'
import cows from './cows'

const todoApp = combineReducers({
  cows
});

export default todoApp;
