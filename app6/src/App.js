import { Link } from 'react-router-dom'
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './pages/sidebar';
import ModalPage from './pages/ModelPage';

import Demo from './routing/Demo';
import About from './routing/About';
import Contact from './routing/Contact';

function App(){

    return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
        {/* <Navbar/>  */}
 
        <BrowserRouter>
            {/* <Link to = "Button">GO TO BUTTON</Link> */}
            <Sidebar/>
        <div className='col-span-5'>
            <Routes>
                <Route path="/" element={<DropdownPage/>}/>
                <Route path="/AccordionPage" element={<AccordionPage/>}/>
                <Route path="/DropdownPage" element={<DropdownPage/>}/>
                <Route path="/Button" element={<ButtonPage/>}/>      
                <Route path="/modal" element={<ModalPage/>}/>   

                <Route path="/about" element={<About/>}/>  
                <Route path="/contact" element={<Contact/>}/>            
                <Route path="/demo/:id" element={<Demo/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    </div>
    )
    

}

export default App;