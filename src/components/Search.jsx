import React, { useState } from 'react'


function Search({ search, setSearch }) {
    
    
    
    function handleChange(e) {
        
        const valor = e.target.value;

        setSearch(valor)
    }


    return (
        <div className="Search">
            <input  
                className="input input-search" 
                type="text"
                onChange={handleChange} 
                value={search}
                placeholder='Search Task'
                autoFocus
            />
        </div>
    );
}

export { Search };