import { RepositoryItem } from "./repository.item"

const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>
                lista de repositorios
            </h1>

            <ul>
                {"________".split("").map(() => (
                    <RepositoryItem />
                ))}
            </ul>
        </section>
    )
}

export {
    RepositoryList
}