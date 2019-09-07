import React from 'react';
import ListItem from './listItem'
import './list.css';

export default function List({ code, npmToSearch }) {
    return (
        <div className='list-container'>
            { !!code.length && code.map((file, idx) => (
                <ListItem
                    key={idx}
                    file={file}
                    npmToSearch={npmToSearch}
                />
            ))}
        </div>
    );
};
