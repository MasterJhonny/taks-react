import React from 'react';

// import functions to open modal
import { scrollbar } from './functions/scrcollbar'

function CreateButton({ setOpenModal }) {

    // function to open modal
    function handleClick() {

        scrollbar.add()
        
        setOpenModal(true)
    }

    return (
        <button className="btn btn-add" onClick={handleClick}>+</button>
    );
}

export { CreateButton };