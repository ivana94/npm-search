import React, { useEffect, useState } from 'react';
import Header from './header';
import Search from './search';
import List from './list';
import ErrorMessage from './errorMessage';
import { getRepos } from './utils/repos';
import { getCodeFromGithub } from './utils/external/github';
import './app.css';

/*

    App's job:
        store in its state the list of links to be rendered, store user's input, and make all necessary ajax requests to get those links.

    App's job is NOT:
        handle user input. it should simply have the search term the user entered, but not actively collect that input.

*/

export default function App() {

    const [repos, setRepos] = useState([]);
    const [npmToSearch, setNpmToSearch] = useState('');
    const [code, setCode] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {

            // first, get repos from github
            if (!repos.length) {
                const items = await getRepos(repos);
                setRepos(items);
            }

            // if search term entered, get files from github
            if (npmToSearch) {
                try {
                    const resp = await getCodeFromGithub(npmToSearch, repos, setCode);
                    setCode(resp);
                    setError(false);
                } catch (err) {
                    setError(err.response.status);
                    setCode([]);
                }
            }

        })();
    }, [npmToSearch]);

    return (

        <React.Fragment>
            <Header />
            <Search setNpmToSearch={setNpmToSearch}/>
            { !!code.length && <List
                code={code}
            />}
            { error && <ErrorMessage error={error} />}
        </React.Fragment>

    );

};
