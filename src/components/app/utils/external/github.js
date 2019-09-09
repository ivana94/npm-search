import axios from 'axios';
import { filterCodeResultsFromGithub } from '../code';

export const getReposFromGithub = async() => {
    try {
        const { data: { items }} = await axios.get('https://api.github.com/search/repositories?q=react+language:js&sort=stars&order=desc?limit=10');
        return items.slice(0, 10);
    } catch (err) {
        console.log('err in github.getRepos: ', err);
    };
};

export const getCodeFromGithub = async(searchTerm, repos, setCode) => {
    try {
        const arrOfProm = repos.map(repo => axios.get(
            `https://api.github.com/search/code?q=${searchTerm}+in:file+language:js+repo:${repo}`
        ));
        const results = await Promise.all(arrOfProm);
        return filterCodeResultsFromGithub(results, setCode);
    } catch (err) {
        console.log('err in getCodeFromGithub: ', err);
        throw err;
    }
};
