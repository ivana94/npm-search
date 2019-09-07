import { getCodeFromGithub } from './external/github';

export const filterCodeResultsFromGithub = async (codeArray, setCode) => {
    let cleanResultFromGithub = [];
    const results = codeArray.map(repo => {
        repo.data.items.forEach(file => {
            cleanResultFromGithub.push({
                fileName: file.name,
                url: file.html_url,
                repoOwner: file.repository.owner.login,
                repoName: file.repository.name,
                profilePic: file.repository.owner.avatar_url
            });
        });
    });
    return setCode(cleanResultFromGithub);
};
