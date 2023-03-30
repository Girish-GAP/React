import { useState } from "react";


function BookCreate({onCreate}){

    const[inputBook, setInputBook] = useState("");

    const handelOnSubmit = (event) =>{
        event.preventDefault(); 
        onCreate(inputBook);
        setInputBook("");
    }

    const handelChange = (event) =>
    {
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