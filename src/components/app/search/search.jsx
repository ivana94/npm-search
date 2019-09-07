import React from 'react';

export default function Search({ setNpmToSearch }) {
    return (
        <input
            type='text'
            name='npm-search-term'
            placeholder="enter the NPM package you'd like to search for!"
            onChange={ ({ target: { value } }) => setNpmToSearch(value) }
        />
    )
}
