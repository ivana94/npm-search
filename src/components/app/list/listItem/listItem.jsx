import React from 'react';
import './listItem.css';

export default function ListItem({ file }) {
    return (
        <div>
            <a href={ file.url } target="_blank">
                <div className='list-item'>
                    <div>
                        <img src={ file.profilePic } alt={`${ file.repoOwner }'s profile picture on Github`} />
                    </div>
                    <div className='list-item-description'>
                        <p><strong>{ file.repoOwner }</strong>'s repo <strong>{ file.repoName }</strong> has a file <strong>{ file.fileName } </strong>   that might help!</p>
                    </div>
                </div>
            </a>
        </div>
    );
};
