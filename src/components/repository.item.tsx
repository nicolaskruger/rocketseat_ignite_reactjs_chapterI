import { FC } from "react";
import { RepositoryRequest } from "../client/github.client";



type RepositoryItemProps = {
    repository: RepositoryRequest
}


const RepositoryItem: FC<RepositoryItemProps> = ({ repository }) => {

    const { name, description, html_url } = repository;

    return (<li key={name}>
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
