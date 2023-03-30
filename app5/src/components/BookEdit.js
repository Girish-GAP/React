import { useState} from "react";
import useBooksContext from "../hooks/use-book-context";

function BookEdit({book, onSubmit}){

    const {editBookByEdit} = useBooksContext();

    const [title, setTitle] = useState(book.title);

    const handelChange = (event)=>{
        setTitle(event.target.value);
    }  
    
    const handelSubmit = (event) =>{
        event.preventDefault();
        onSubmit()  // to off toggle show edit
        editBookByEdit(title, book.id);
    }

    return(
        <form onSubmit = {handelSubmit} className="book-edit">
            <label>Title</label>
            <input onChange={handelChange}  value={title} className="input"/>
            <button
            onClick={handelSubmit}
            className="button is-primary">Save</button>
        </form>
    );

}

export default BookEdit;