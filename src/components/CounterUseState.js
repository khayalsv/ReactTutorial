import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

const CounterUseState = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setvalueToAdd] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        setvalueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setCount(count + valueToAdd);
        setvalueToAdd(0);

    }

    return (
        <>
            <h1>Count is {count}</h1>
            <div>
                <Button onClick={increment}>increment</Button>
                <Button onClick={decrement}>decrement</Button>
            </div>

            <br />

            <form onSubmit={handleSubmit}>
                <Input type='number' value={valueToAdd || ""} onChange={handleChange} />
                <button>Add it!</button>
            </form>
        </>
    )
}

export default CounterUseState