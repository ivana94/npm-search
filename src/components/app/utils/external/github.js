import axios from 'axios';
import { filterCodeResultsFromGithub } from '../code';

export const getReposFromGithub = async() => {
    try {
        const { data: { items }} = await axios.get('https://api.github.com/search/repositories?q=react+language:js&sort=stars&order=desc');
        return items;
    } catch (err) {
        console.log('err in github.getRepos: ', err);
    };
};

export const getCodeFromGithub = async(searchTerm, repos, setCode) => {
    repos = repos.slice(0, 10);
    // try {
    //     const arrOfProm = repos.map(repo => axios.get(
    //         `https://api.github.com/search/code?q=${searchTerm}+in:file+language:js+repo:${repo}`
    //     ));
    //     const results = await Promise.all(arrOfProm);
    //     localStorage.setItem('code', JSON.stringify(results));
        return filterCodeResultsFromGithub(JSON.parse(localStorage.getItem('code')), setCode);
    // } catch (err) {
    //     console.log('err in getCodeFromGithub: ', err);
    // }
}
