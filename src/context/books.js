import axios from 'axios';
import { createContext, useCallback, useState } from 'react'

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);


    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://127.0.0.1:3001/books');

        setBooks(response.data)
    }, []);


    const createBook = async (title) => {
        const response = await axios.post('http://127.0.0.1:3001/books', {
            title
        });

        console.log(response);

        const updateBooks = [...books, response.data]
        setBooks(updateBooks);
    };


    const deleteBookById = async (id) => {
        await axios.delete(`http://127.0.0.1:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };


    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
            title: newTitle
        });

        console.log(response);

        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });
        setBooks(updateBooks);
    }

    const valueToShare = {
        books,
        createBook,
        deleteBookById,
        editBookById,
        fetchBooks
    }

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
}

export { Provider };
export default BooksContext;