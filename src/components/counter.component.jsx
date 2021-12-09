import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <section>
            <strong>{count}</strong>
            <button
                type="button"
                onClick={() => setCount(count + 1)} >
                increment
            </button>
        </section>
    );
}

export {
    Counter
}