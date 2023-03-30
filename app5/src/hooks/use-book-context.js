import { useContext } from "react";
import BooksContext from "../context/books";


// custome hook : resuable logic
function useBooksContext(){
    return useContext(BooksContext);
}

export default useBooksContext;