import { githubClient, RepositoryRequest } from "../client/github.client"

const useGitHubService = (setRepository: (repo: RepositoryRequest[]) => void) => {

    const client = githubClient();

    const getNicolasKrugerRepository = async () => {
        setRepository(await client.getUserRepo("nicolaskruger"));
    }
    return {
        getNicolasKrugerRepository,
    }
}

export {
    useGitHubService
}