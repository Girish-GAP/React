import { useState } from "react";
import BookEdit from './BookEdit'

function BookShow({book, onDelete, onEdit}){

    const [showEdit, setShowEdit] = useState(false);

    const handelDeleteClick = (id)=>{
        onDelete(book.id)
    }

    const handelEditClick = ()=>{
        setShowEdit(!showEdit)      // toggle
    }

    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false)     
        onEdit(id, newTitle)
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book = {book}/>
    }

    // we want to toggle the shwoEdit after submit : 
    // 1st way : create a function here and pass a prop and then call from there by passing props
    // 2nd way : 
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