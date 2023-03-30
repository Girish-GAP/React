import { useState } from "react";

function BookEdit({book, onSubmit}){


    const [title, setTitle] = useState(book.title);

    const handelChange = (event)=>{
        setTitle(event.target.value);
    }  
    
    const handelSubmit = (event) =>{
        event.preventDefault();
        onSubmit(title, book.id)
    }

    return(
        <form onSubmit = {handelSubmit} className="book-edit">
            <label>Title</label>

            {/* In react any time we show an input element, we are always going to keep tack of that */}
            {/* input element value using the state system, so we need to declare the new pice of state for input */}
            <input onChange={handelChange}  value={title} className="input"/>
            <button
            onClick={handelSubmit}
            className="button is-primary">Save</button>
        </form>
    );

}

export default BookEdit;