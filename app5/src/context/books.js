// Create the contexts

import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){

    const[books, setBooks] = useState([]);

    const featchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books"); 
        setBooks(response.data);
    }

    const deleteBookById = async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedbooks = books.filter((book)=>
            book.id !== id
        ) 

        setBooks(updatedbooks);
    }

    const createBook = async (title) =>{
        // WITH API :
        const response = await axios.post(   "http://localhost:3001/books", // end-point
            { title : title }             // body 
        );
        const updatedBooks = (              
            [ ...books, response.data ]
        );
        setBooks(updatedBooks);
    }

    const editBookByEdit = async (newTitle, id) =>{
        
        const response = await axios.put(`http://localhost:3001/books/${id}`,
            { title : newTitle }
        );
        const updatedBooks = books.map((book)=>
            book.id === id ? {...book, ...response.data} : book
        )
        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        deleteBookById,
        editBookByEdit,
        createBook,
        featchBooks 
    };

    // what ever we are passing through BooksContesxt.provider as a prop that we are sharing with context
    return <BooksContext.Provider value={valueToShare}> {children} </BooksContext.Provider>
    
}

export {Provider};

export default BooksContext; 