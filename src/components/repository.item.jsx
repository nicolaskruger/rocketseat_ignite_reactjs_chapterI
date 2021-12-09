const RepositoryItem = ({ repository }) => {

    const { name, description, html_url } = repository;

    return (<li>
        <strong>
            {name ?? "Default"}
        </strong>
        <p>
            {description ?? "Froms in React"}
        </p>

        <a href={html_url ?? "https://github.com"}>
            acessar repositorios
        </a>
    </li>);
}

export {
    RepositoryItem
}