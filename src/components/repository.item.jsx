const RepositoryItem = ({ repository, description, link }) => {
    return (<li>
        <strong>
            {repository ?? "Default"}
        </strong>
        <p>
            {description ?? "Froms in React"}
        </p>

        <a href={link ?? "https://github.com"}>
            acessar repositorios
        </a>
    </li>);
}

export {
    RepositoryItem
}