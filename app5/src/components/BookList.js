import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-book-context";    // custome hooks also reduce no. of imports

function BookList(){

    const {books} = useBooksContext();  // this is the custome hook
    // const {books} = useContext(BooksContext);

    const renderedBooks = books.map((book)=>{
            return <BookShow key = {book.id} book = {book} />
    });  

    return(
        <div className="book-list">
            {renderedBooks}        
        </div>
    );
}


export default BookList;