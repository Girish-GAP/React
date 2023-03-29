import React, { useState } from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {makeStyles} from '@mui/material';
import AddUser from './AddUser';

// import AddUser from './AddUser';

import './style.css'



function Dash() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        console.log("hi")
        setOpen(false);
    };
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Open Animated Modal
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                // className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} >
                    
                    <div className = "popform" >
                        <button onClick={handleClose}>CLOSE</button>
                        <AddUser/>
                    </div>
                </Fade>
            </Modal>

       
        </div>
    );
}


export default Dash;