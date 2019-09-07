import React from 'react';
import ListItem from './listItem'
import './list.css';

export default function List({ code }) {
    return (
        <div className='list-container'>
            { (code && !!code.length) && code.map((file, idx) => (
                <ListItem
                    key={idx}
                    file={file}
                />
            ))}
        </div>
    );
};
