import React from 'react';
import './errorMessage.css';

export default function ErrorMessage({ error }) {

    return (
        <div className='error-container'>
            { (error === 403) && <p>rate limit reached 😱. try again in 1 minute! </p> }
        </div>
    )
}
