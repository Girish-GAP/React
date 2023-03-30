import'./App.css';  // telling to use css form inside that file and load it in browser when load project
import AnimalShow from './AnimalShow'
import { useState } from 'react';

function getRandomAnimal(){
    const Animals = ['cow', 'cat', 'dog', 'horse', 'gator', 'heart'];

    return Animals[Math.floor(Math.random() * Animals.length)]
}

function App(){

    const [animals, setAnimals] = useState([]);

    function handelOnClick(){
        // animals.push(getRandomAnimal);  // this modifies the peice of state !!! and we don't do it directly
      setAnimals([...animals, getRandomAnimal()]);
    }

    // using map function
    const renderedAnimal= animals.map((animal, index)=> {
        // it will take every element one by one form animals array 
        // and when we return it will store it in renderdAnimal at exact same index
        return <AnimalShow type={animal} key = {index}/>
        // key is a little bit of record keeping with React.
        // React wants to be able to identify each individual element that you are returning inside of a list. 
    })

    // it will look like that :
    // renderdAnimal = { <AnimalShow type = {animal[0]} />, 
            //              <AnimalShow type = {animal[1] />}

    return(
        <div>
            <button onClick = {handelOnClick}>Add Animal</button>
            <div className='animal-list'>
                {renderedAnimal}
            </div>
        </div>
    )
}

export default App;


// Before writing any logic first find out what exactly we want to do : eg. in this application we want to perform following :
/*
    // What is our objective of logic Add Animal ? :
    - Need some kind of 'count' variable
    - Should start with a value of 0
    - Add 1 whenever the use clicks
    - Whenever the value is changed updated content on screen (render)

*/

/*
    // why we have used the only handelOnClick and not handelOnClick ?
    -> because we are passing the whole function to the onClick 
        console.log(handelOnClick)    // will print entire function 
        console.log(handelOnClick())      // will print only return value

        - hanelOnClick : gives the button the whole function so the button can call the function
                         in the future when the button is clicked

        - hanelOnClick : immediately calls 'onButtonClick' and gives the button the return value


    // Convert noraml function to arrow function
    funtion(){
        console.log("Hello")
    }

    () => {
        console.log("Hello")
    }

    () => console.log("Hello")


    // onClick with arrow function : 
    
            //  This is also valid 
            // <button onClick = {
            //     // we use this type because of less syntax
            //     () => console.log("this is an inline funciton")
            // }>Inline button</button>

    
    // Array Destructuring
    function makeArray(){
        return [5,6,7,8,9];
    }

    // first way :
    const myArray = makeArray();
    const felement = myArray[0];
    const selement = myArray[1];

    // 2nd way : array destructuring :
    const [felement, selement] = makeArray();
*/


/*
    // STATE :

        const [count,      // pice of state // we can not change it directly(count = 123 // ERROR), only way to change is the use setfunction
            setCount]  // setter function used to update our pice of state
            // array destructuring form use state function return value it's the functionality of javascript.

            // when ever setCoutn called react almost rerender the entire component
                        =  useState(0);     // default start value of the pice of state is 0

    // why array destructuring : 
    console.log(useState(50));  // it returns first value pice of state, and 2nd function // why not obj explained in video 49

*/