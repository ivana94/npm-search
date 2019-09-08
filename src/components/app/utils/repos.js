import { getReposFromGithub } from './external/github';

// getRepos determines whether to fetch repos from LS or Github
export const getRepos = async repos => {
    const reposFromLs = JSON.parse(localStorage.getItem('repos'));
    if (reposFromLs && reposFromLs.length) {
        return reposFromLs;
    } else {
        try {
            const items = await getReposFromGithub();
            localStorage.setItem('repos', JSON.stringify(items.map(item => item.full_name)));
            return items;
        } catch (err) {
            console.log(err);
        }
    }
}
