import { Counter } from "./components/counter.component";
import { RepositoryList } from "./components/repository.list";
import "./styles/global.scss";

const App = () => {
    return <>
        <Counter />
        <RepositoryList />
    </>
}

export {
    App
}