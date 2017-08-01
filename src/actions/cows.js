import { ADD_COW, REMOVE_COW } from '../constants/cows/types';

const addCow = cow =>
    { type: ADD_COW, cow }

const removeCow = cow =>
    { type: REMOVE_COW, cow }