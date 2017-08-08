// @flow
import React from 'react';
import { male, female } from '../../constants/sex.const';
import { type cowState } from '../../constants/cows/state';
import './Form.css';

type Props = {
    ...cowState,
    changeState: Function,
    save: Function,
};

const Form = (props: Props) =>
    <div className="form">
        <div className="_control">
            <label htmlFor="name">name: </label>
            <input
                type="text"
                name="name"
                value={props.name}
                onChange={(e: SyntheticInputEvent) => props.changeState(e, 'name')}
            />
        </div>
        <div className="_control">
            <label htmlFor="born">born age: </label>
            <input
                type="number"
                name="born"
                value={props.born}
                onChange={e => props.changeState(e, 'born')}
            />
        </div>
        <div className="_control">
            <label htmlFor="breed">breed: </label>
            <input
                type="text"
                name="breed"
                value={props.breed}
                onChange={e => props.changeState(e, 'breed')}
            />
        </div>
        <div className="_control">
            <label htmlFor="weight">weight: </label>
            <input
                type="number"
                name="weight"
                value={props.weight}
                onChange={e => props.changeState(e, 'weight')}
            />
        </div>
        <div className="_control">
            <label htmlFor="sex">sex: </label>
            <select
                name="sex"
                value={props.sex}
                onChange={e => props.changeState(e, 'sex')}>
                <option>choose</option>
                <option value={male}>male</option>
                <option value={female}>female</option>
            </select>
        </div>

        <div className="_control">
            <button className="btn-add-cow" onClick={props.save}>save the cow</button>
        </div>
    </div>


export default Form;
