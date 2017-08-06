import { ADD_COW, REMOVE_COW } from '../constants/cows/types';

export const addCow = cow =>
    ({ type: ADD_COW, cow });

export const removeCow = cowId =>
    ({ type: REMOVE_COW, cowId });