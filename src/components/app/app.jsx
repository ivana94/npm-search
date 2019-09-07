import React, { useEffect, useState } from 'react';
import Header from './header';
import Search from './search';
import List from './list';
import { getRepos } from './utils/repos';
import { getCodeFromGithub } from './utils/external/github';
import './app.css';

/*

    App's job:
        store in its state the list of links to be rendered, and make all necessary ajax requests to get those links.

    App's job is NOT:
        to store user input

*/

export default function App() {

    const [repos, setRepos] = useState([]);
    const [npmToSearch, setNpmToSearch] = useState('');
    const [code, setCode] = useState([]);

    useEffect(() => {
        if (!repos.length) {
            getRepos(repos, setRepos);
        }

        if (npmToSearch) {
            const resp = getCodeFromGithub(npmToSearch, repos, setCode);
        }

    }, [npmToSearch]);

    return (

        <React.Fragment>
            <Header />
            <Search setNpmToSearch={setNpmToSearch}/>
            { !!code.length && <List
                code={code}
            />}
        </React.Fragment>

    );

};
