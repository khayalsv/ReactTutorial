import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
            <div>{content}</div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        </>
    )
}

export default BookShow