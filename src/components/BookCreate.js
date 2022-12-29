import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'

function BookCreate() {
    const { createBook } = useBooksContext();

    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle(''); //after typing, input cleanup
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} />
                <button>Create!</button>
            </form>
        </>
    )
}

export default BookCreate