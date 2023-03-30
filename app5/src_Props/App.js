import { useState, useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App(){

    const[books, setBooks] = useState([]);

    const featchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books"); 
        setBooks(response.data);
    }

    // NEVER DO THIS :
    // featchBooks();

   // Use useEffect : 
    useEffect(()=>{
        featchBooks(); 
    },  []);

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

    return(
        <div className="app">
            <BookList books = {books} onDelete = {deleteBookById} onEdit = {editBookByEdit}/>
            <BookCreate onCreate = {createBook}/>
        </div>
    )
}


export default App;



// WITHOUT API :
// const updatedBooks = (
//     [...books,      
//                 {id : Math.round(Math.random() * 999),
//                      title : title}]
// );
// const editBookById = books.map((book)=>
// book.id == id ? {"title" : newTitle, id : id} : book
// )
// const deleteBookById = (id)=>{
//     const updatedBooks = books.filter((book)=>{
//         return book.id !== id; 
//     })
//     setBooks(updatedBooks);
// }