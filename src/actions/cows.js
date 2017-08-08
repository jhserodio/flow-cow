// @flow
import { type cowState } from '../constants/cowState';

type AddCow = {
  +type: 'ADD_COW',
  +cow: cowState,
};

export const addCow = (cow: cowState): AddCow =>
    ({ type: 'ADD_COW', cow });


type RemoveCow = {
  +type: 'REMOVE_COW',
  +id: number,
};

export const removeCow = (id: number): RemoveCow =>
    ({ type: 'REMOVE_COW', id });

export type CowAction =
  | RemoveCow
  | AddCow