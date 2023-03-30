import { useSelector, useDispatch } from "react-redux";
import { changeSerchTerm } from "../store";

const CarSearch = () =>{

    const searchTerm = useSelector((state)=>{
        return state.cars.changeSerchTerm;
    })

    const dispatch = useDispatch();

    const handleSearchTermChange = (event)=>{
        dispatch((changeSerchTerm(event.target.value)))
    }

    return(
        <div className="list-header">
            <h3 className="title is-3 mr-6">My Cars</h3>
            <div className="search field is-horizontal"></div>
                <label className="label mr-2">Search</label>
                <input 
                    className="input mr-2"
                    value={searchTerm}
                    onChange = {handleSearchTermChange}
                />
        </div>
    );
}

export default CarSearch;