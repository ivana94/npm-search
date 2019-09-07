import React from 'react';
import './listItem.css';

export default function ListItem({ file }) {

    return (
        <div className='list-item'>
            <h3>{ file.repoName }</h3>
            <h3>{ file.repoOwner }</h3>
            <img src={file.profilePic} />
            <h3>{ file.url }</h3>
        </div>

    );

};
