import './searchBar.css'
import { useState } from "react";


function SearchBar({callSubmit}){

  const [term, setTerm] = useState('car');

  const handelFormSubmit = (event) => {
      event.preventDefault();
      callSubmit(term);
  }

  const handelOnChange= (event)=>{
        // setTerm(event.target.value.replace(/[a-z]/, ''))  // can not write the small letters validations
        setTerm(event.target.value)
      }

    // console.log("Rerender search bar"); // everytime onchange component is rerendering
    
    return(
      <div className='search-bar'>
        {/* to liten the submit event we have to pass props onSubmit to form */}
        {/* when we click on submit or enter in form input then some automatic behavior inside the browser would kick in */}
        {/* broser do some more things than only call submit event function which are */}
        {/* to avoid that we use event.preventDefault */}
        <form onSubmit={handelFormSubmit}>
          {/* Cofirm your search : {term} */}
          <labe>Enter search term</labe>
          <input 
            value={term} //to set default value
            onChange={handelOnChange}
          />

          {/* validations */}
          {term.length < 3 && 'Term must be longer'}

        </form>
      </div>
    )
  }
  
export default SearchBar;