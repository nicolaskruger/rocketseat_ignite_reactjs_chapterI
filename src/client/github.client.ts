
export type RepositoryRequest = {
    name: string,
    description: string,
    html_url: string,
}

export type GithubClient = {
    getUserRepo: (name: string) => Promise<RepositoryRequest[]>
}

const githubClient = (): GithubClient => {
    const BASE_URL = "https://api.github.com/";
    const USER_REPO = (name: string) => `${BASE_URL}${name}/repos`;
    const getUserRepo = async (name: string) => {
        return (await (await fetch(USER_REPO(name))).json()) as RepositoryRequest[]
    }

    return {
        getUserRepo
    }
}

export {
    githubClient
}
