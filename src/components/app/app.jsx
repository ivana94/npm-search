import React, { useEffect, useState } from 'react';
import Header from './header';
import Search from './search';
import axios from '../../utils/axios';
import './app.css';

export default function App() {

    const [repos, setRepos] = useState([]);
    const [npmToSearch, setNpmToSearch] = useState('');

    useEffect(() => {
        (async () => {
            const reposFromLs = localStorage.getItem('repos');
            if (reposFromLs.length) {
                setRepos(JSON.parse(reposFromLs));
            } if (!repos.length) {
                try {
                    const { data: { items } } = await axios.get('https://api.github.com/search/repositories?q=react+language:js&sort=stars&order=desc');
                    setRepos(items.map(item => item.full_name));
                    localStorage.setItem('repos', JSON.stringify(items.map(item => item.full_name)));
                } catch (err) {
                    console.log(err);
                }
            }

        })();
    }, [npmToSearch]);

    return (

        <React.Fragment>
            <Header />
            <Search setNpmToSearch={ setNpmToSearch }/>
        </React.Fragment>

    );

};
