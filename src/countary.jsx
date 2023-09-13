import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRedice = () => {
        const newCount = count -1;
        setCount(newCount)
    }

    return (
        <div style={{border: '2px solid violet', borderRadius: '10px'} }>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRedice}>Reduce</button>
            <button>Reset</button>
        </div>
    )
}