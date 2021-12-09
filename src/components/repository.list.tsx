import '../styles/repository.scss'
import { RepositoryItem } from "./repository.item"
import { useEffect, useState } from "react"
import { RepositoryRequest } from "../client/github.client";


const RepositoryList = () => {

    const URL = "https://api.github.com/users/nicolaskruger/repos";

    const [repositoriess, setRepositoriess] = useState<RepositoryRequest[]>([]);


    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setRepositoriess(data);
            })
    }, []);

    return (
        <section className="repository-list">
            <h1>
                lista de repositorios
            </h1>

            <ul>
                {repositoriess.map(repo => <RepositoryItem key={repo.name} repository={repo} />)}
            </ul>
        </section>
    )
}

export {
    RepositoryList
}