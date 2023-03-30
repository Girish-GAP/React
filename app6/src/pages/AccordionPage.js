import Accordion from "../components/Accordion";
import ButtonPage from "./ButtonPage";

function AccordionPage(){

    const items = [
        {
            id : '12e',
            label : 'Can i use React on a project?',
            content : 'You can use react on any project you want',
        },
        {
            id : '12ed',
            label : 'Can i use Javascript on a project?',
            content : 'You can use js on any project you want',

        },
        {
            id : '12es',
            label : 'Can i use CSS on a project?',
            content : 'You can use css on any project you want',
        }
    ]


    return(
        <div>
            <Accordion items = {items}/>
        </div>
    )  
}

export default AccordionPage;