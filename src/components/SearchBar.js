import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>

                <input value={term} onChange={handleChange} />
            </form>
            Confirm you search: {term}
        </>
    )
}

export default SearchBar;

