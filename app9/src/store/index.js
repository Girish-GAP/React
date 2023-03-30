import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSerchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost} from "./slices/FormSlice"

const store = configureStore({
    reducer : {
        cars : carsReducer,
        form : formReducer
    }
});

export {store, 
        addCar, removeCar, changeSerchTerm,
        changeName, changeCost}

