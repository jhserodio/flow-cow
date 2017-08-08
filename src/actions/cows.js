// @flow
import { ADD_COW, REMOVE_COW } from '../constants/cows/types';
import { type cowState } from '../constants/cows/state';

export const addCow = (cow: cowState) =>
    ({ type: ADD_COW, cow });

export const removeCow = (cowId: number) =>
    ({ type: REMOVE_COW, cowId });
