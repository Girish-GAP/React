import Modal from "../components/Model";
import Button from "../components/Button";
import { useState } from "react";


function ModalPage(){
    
    const [showModal, setShowModal] = useState(false); 

    const handelClick = () =>{
        setShowModal(!showModal);
    }
    
    return(
        <div>
            <Button onClick = {handelClick} primary> Open model </Button>
            {showModal && <Modal show = {handelClick}/>}
        </div>
    );
}

export default ModalPage;