import { ADD_COW, REMOVE_COW } from '../constants/cows/types';

export const addCow = cow =>
    ({ type: ADD_COW, cow });

export const removeCow = cow =>
    ({ type: REMOVE_COW, cow });