// @flow
import { male, female } from './sex.const';

export type cowState = {
    id?: number,
    name: ?string,
    born: ?number,
    weight: ?number,
    sex: ?(typeof male | typeof female),
    breed: ?string
};

const initialState: Array<cowState> = [
    {
        id: 1,
        name: 'Cool Cow',
        born: 1874,
        weight: 10000,
        sex: 'female',
        breed: 'angus'
    },
    {
        id: 2,
        name: 'Maconha',
        born: 1200,
        weight: 7000,
        sex: 'male',
        breed: 'black angus'
    }
];

export default initialState;