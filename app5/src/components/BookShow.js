import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from './BookEdit'

function BookShow({book}){

    const [showEdit, setShowEdit] = useState(false);

    const {deleteBookById} = useContext(BooksContext);

    const handelDeleteClick = ()=>{
        deleteBookById(book.id)
    }

    const handelEditClick = ()=>{
        setShowEdit(!showEdit)      // toggle
    }

    const handleSubmit = () =>{
        setShowEdit(false)     
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book = {book}/>
    }
    
    return(
        <div className="book-show">
            <img 
                alt = "books"
                src = {`https://picsum.photos/seed/${book.id}/300/200`}  // 300 width, 200 tall // book.id is random num for diff. img
            />
            <div>{content}</div>
            <div className = "actions">
                <button className = "delete" onClick={handelDeleteClick}>DELETE</button>
                <button className = "edit" onClick={handelEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default BookShow;