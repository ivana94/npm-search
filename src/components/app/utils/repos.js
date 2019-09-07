import { getReposFromGithub } from './external/github';

// getRepos determines whether to fetch repos from LS or Github
export const getRepos = async (repos, setRepos) => {
    const reposFromLs = JSON.parse(localStorage.getItem('repos'));
    if (reposFromLs && reposFromLs.length) {
        setRepos(reposFromLs);
    } else {
        try {
            const items = await getReposFromGithub();
            setRepos(items.map(item => item.full_name));
            localStorage.setItem('repos', JSON.stringify(items.map(item => item.full_name)));
        } catch (err) {
            console.log(err);
        }
    }
}
