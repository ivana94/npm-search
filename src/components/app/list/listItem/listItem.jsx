import React from 'react';
import './listItem.css';

export default function ListItem({ file }) {
    return (
        <React.Fragment>
            <a href={ file.url } target="_blank">
                <div className='list-item'>
                    <div>
                        <img src={ file.profilePic } alt={`${ file.repoOwner }'s profile picture`} />
                    </div>
                    <div>
                        <p><strong>{ file.repoOwner }</strong>'s repo <strong>{ file.repoName }</strong> has a file <strong>{ file.fileName }</strong></p> that might help!
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
};
