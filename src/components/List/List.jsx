import React from 'react';
import './List.css';


const List = ({ cows, remove }) =>
    <div className="list">
        {cows ? cows.map(cow => (
            <div className="_item" key={cow.id}>
                <div className="_content">
                    <div><strong>Name:</strong><span>{cow.name}</span></div>
                    <div><strong>Born:</strong><span>{cow.born}</span></div>
                    <div><strong>Weight:</strong><span>{cow.weight}</span></div>
                    <div><strong>Race:</strong><span>{cow.race}</span></div>
                    <div><strong>Sex:</strong><span>{cow.sex}</span></div>
                </div>
                <button onClick={() => remove(cow.id)}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M29.98 6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1.002c0-1.657-1.344-3-3-3h-10c-1.657 0-3 1.343-3 3v1.001h-3c-1.595 0-2.885 1.246-2.981 2.816h-0.019v2.183c0 1.104 0.896 2 2 2v0 17c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4v-17c1.104 0 2-0.896 2-2v-2.182h-0.020zM10 3.002c0-0.553 0.447-1 1-1h10c0.553 0 1 0.447 1 1v1h-12v-1zM26 28.002c0 1.102-0.898 2-2 2h-16c-1.103 0-2-0.898-2-2v-17h20v17zM28 8.001v1h-24v-1.999c0-0.553 0.447-1 1-1h22c0.553 0 1 0.447 1 1v0.999zM9 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM9 14.005h2v13h-2v-13zM15 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM15 14.005h2v13h-2v-13zM21 28.006h2c0.553 0 1-0.447 1-1v-13c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v13c0 0.553 0.447 1 1 1zM21 14.005h2v13h-2v-13z"></path>
                    </svg>
                </button>
            </div>
        )) : ''}
    </div>


export default List;
