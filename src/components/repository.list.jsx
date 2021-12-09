import { RepositoryItem } from "./repository.item"

import '../styles/repository.scss'
import { useEffect, useState } from "react"


const RepositoryList = () => {

    const URL = "https://api.github.com/users/nicolaskruger/repos";

    const [repositoriess, setRepositoriess] = useState([]);

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