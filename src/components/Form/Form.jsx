import React from 'react';

import './Form.css';

const
    male = 'male',
    female = 'female';  

const Form = props =>
    <div className="form">
        <div className="_control">
            <label htmlFor="name">name: </label>
            <input
                type="text"
                name="name"
                value={props.name}
                onChange={e => props.changeState(e, 'name')}
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
            <label htmlFor="race">race: </label>
            <input
                type="text"
                name="race"
                value={props.race}
                onChange={e => props.changeState(e, 'race')}
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
