import {useState,useEffect, useRef} from 'react'
import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'


function Dropdown({options, value, onChange}){

    const [isOpen, setIsOpen] = useState(false);

    // going to take this variable and we are going to associate it with the root element of our components.
    // so that's going to be the div with that class name of w-48
    const divEl = useRef(); // reference to div element


    useEffect(()=>{
        const handler = (event) => {

            if(!divEl.current){     // to handel condition if pointer is null or undefined // good practice 
                return;
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true)
    }, 
    [])

    const handleClick = () => {

        // simple way : 
        setIsOpen(!isOpen); // not isOpen // toggle 

        // correct way : 
        // so because we are updating our state and its new value is dependent upon the old value :
        // Teachnically, we would want to look at doing a functional update.
        // we had pass in function that would receive the current value of is open and then would return not current is open
        // setIsOpen((currentIsOpen) => !currentIsOpen)
    }


    const handleOptionClick = (option) => {
         setIsOpen(false);  // close dropdown
         onChange(option);  // what option used clicked

    }

    const renderedOptions = options.map((option)=>{
        return(
            <div 
                className='hover:bg-sky-100 rounded cursor-pointer p-1'
                key = {option.value}
                onClick = {()=> handleOptionClick(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        // we wan't to get the referenace to this div
        // 1) add the ref prop and assign it divEl
        // this ref prop is special : if we pass in some variable that came from commonly use ref React is going to take that reference right there
        // and it's going to give us a pointer or essentially allow us to refer to the actual HTML elements that is created in the browser by that jsx tag.
        // anywhere in this component divel variable should give us a reference to the html element created by that jsx tag
        // it dosen't give direct reference to div it gives object with a current propery.

        <div ref = {divEl} className='w-48 relative'>
            <Panel
                className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'
                onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg'/>
            </Panel>
            { isOpen && (
            <Panel
                className='absolute top-full border rounded p-3 shadow bg-white w-full'>
                {renderedOptions}
            </Panel>
            )}

        </div>
    )
}


export default Dropdown;