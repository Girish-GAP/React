import { useSelector } from "react-redux";
import { removeCar } from "../store";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";

const CarList = () =>{

    // const cars  = useSelector ((state)=> {
    //     return state.cars.data;
    // })

    // get data only we want by distructuing
    const {cars, name} = useSelector(({form, cars : {data, searchTerm}}) => {
        const filteredCars = data.filter((car)=>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return{
            cars : filteredCars, 
            name : form.name
        }
    });

    const dispatch = useDispatch();

    const handelCarDelete = (id)=>{
        dispatch(removeCar(id));
    }

    const renderedCars = cars.map((car)=>{
        // DECIDE IF THIS CAR SHOULD BE BOLD
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return(
            <div key = {car.id} className = {`panel ${bold && 'bold'}`}>

                <p> {car.name} - Rs{car.cost} </p>

                <button
                    className="button is-danger"
                    onClick={()=> handelCarDelete(car.id)}
                >
                Delete
                </button>
            </div>
        )
    })

    return(
        <div className="car-list">
           {renderedCars}
           <hr/>
        </div>
    );
}

export default CarList;


// jo bhu hua 