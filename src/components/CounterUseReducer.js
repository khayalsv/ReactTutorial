import { Button, Input } from '@mui/material'
import { useReducer } from 'react'

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
    switch (action.type) {

        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }

        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }

        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }

        default:
            throw new Error('unexpected action type: ' + action.type);
            //return state;
    }
}

const CounterUseReducer = ({ initialCount }) => {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
    }

    return (
        <>
            <h1>Count is {state.count}</h1>
            <div>
                <Button onClick={increment}>increment</Button>
                <Button onClick={decrement}>decrement</Button>
            </div>

            <br />

            <form onSubmit={handleSubmit}>
                <Input type='number' value={state.valueToAdd || ""} onChange={handleChange} />
                <button>Add it!</button>
            </form>
        </>
    )
}

export default CounterUseReducer