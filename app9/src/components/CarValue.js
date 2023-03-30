import { useSelector } from "react-redux";


const CarValue = () => {

    const totalCost = useSelector(({cars : {data, searchTerm}}) =>{
        const filteredCars = data.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    //     let cost = 0;
    //     for(let car of filteredCars){
    //         cost += car.cost;
    //     }
    //     return cost;
    // })

        return filteredCars.reduce((acc, car)=>{
            return acc + car.cost;
        }, 0)   // 0 will be intial value
    })

    
    return(
        <div className="car-value">
            Total cost : ₹{totalCost}
        </div>
    )
}

export default CarValue;