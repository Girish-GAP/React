import { Link } from "react-router-dom";



function Sidebar(){
    const links = [
        { label : 'Dropdown', path : '/' },
        { label : 'Accordion', path : '/AccordionPage' },
        { label : 'Buttons', path : '/Button' },
        { label : 'Modal', path : '/modal' },
        { label : 'Routing', path : '/about' },
    ];

    const renderedLinks = links.map((link)=>{
        return (
            <Link className="mb-3" key = {link.label} to = {link.path}>{link.label}</Link>
        )
    });

    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    )

}


export default Sidebar;