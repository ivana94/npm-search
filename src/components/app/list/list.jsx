import React from 'react';
import ListItem from './listItem'
import './list.css';

export default function List({ code }) {
    return (
        <React.Fragment>
            { !!code.length && code.map((file, idx) => (
                <ListItem
                    key={idx}
                    file={file}
                />
            ))}
        </React.Fragment>

    );

};
