import React from 'react';

import './Form.css';

const
    male = 'male',
    female = 'female';  

const Form = props =>
    <div className="form">
        <div className="_control">
            <label htmlFor="name">name: </label>
            <input type="text" name="name" />
        </div>
        <div className="_control">
            <label htmlFor="born">born date: </label>
            <input type="date" name="born" />
        </div>
        <div className="_control">
            <label htmlFor="race">race: </label>
            <input type="text" name="race" />
        </div>
        <div className="_control">
            <label htmlFor="weight">weight: </label>
            <input type="number" name="weight" />
        </div>
        <div className="_control">
            <label htmlFor="sex">sex: </label>
            <select name="sex">
                <option value={male}>male</option>
                <option value={female}>female</option>
            </select>
        </div>

        <div className="_control">
            <button className="btn-add-cow">save the cow</button>
        </div>
</div>


export default Form;
