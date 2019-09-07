import React, { useState } from 'react';

/*

    Search's job:
        collect user input and pass it along to App

    Search's job is NOT:
        to make ajax requests

*/

export default function Search({ setNpmToSearch }) {

    const [userInput, setUserInput] = useState('');

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
