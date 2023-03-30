import { useState} from "react";
import useBooksContext from "../hooks/use-book-context";


function BookCreate(){

    const[inputBook, setInputBook] = useState("");
    const { createBook } = useBooksContext();

    const handelOnSubmit = (event) =>{
        event.preventDefault(); 
        createBook(inputBook);
        setInputBook("");
    }

    const handelChange = (event) => {
        setInputBook(event.target.value);
    }

return(
    <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handelOnSubmit}>    

            <label>Title</label>
            <input
                className="input"
                value={inputBook}
                 onChange = {handelChange}    
            />

            <button className="button" onSubmit={handelOnSubmit}>Create!</button>
        </form>
    </div>
);
}

export default BookCreate;