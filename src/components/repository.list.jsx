const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>
                lista de repositorios
            </h1>

            <ul>
                {"________".split("").map(() => (
                    <li>
                        <strong>
                            unform
                        </strong>
                        <p>
                            Froms in React
                        </p>

                        <a href="">
                            acessar repositorios
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export {
    RepositoryList
}