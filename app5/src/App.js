import { useEffect, useContext} from "react";
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import BooksContext from "./context/books";

function App(){

    const {featchBooks} = useContext(BooksContext)

    useEffect(()=>{
        featchBooks(); 
    },  []);

    return(
        <div className="app">
            <BookList />
            <BookCreate />
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



//// to start the json server : npm run server