import React, { useState } from 'react';
import './search.css';

/*

    Search's job:
        collect user input and pass it along to App

    Search's job is NOT:
        to make ajax requests

*/

export default function Search({ setNpmToSearch }) {

    const [userInput, setUserInput] = useState('');

    return (
        <div className='search-container'>
            <h3>let's figure out <br />how to make this package work.</h3>
            <form onSubmit={ e => {
                e.preventDefault();
                setNpmToSearch(userInput);
            }}>
                <input
                    type='text'
                    name='npm-search-term'
                    placeholder="enter the NPM package you'd like to search for!"
                    onChange={ ({ target: { value } }) => setUserInput(value) }
                />
            <button>submit</button>
            </form>
        </div>
    )
}
