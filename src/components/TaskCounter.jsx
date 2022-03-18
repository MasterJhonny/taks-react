import React from 'react'


function TaskCounter({ keyLocalStore, completed, total, name, setName }) {


    function handleClick () {
        const name = prompt('Update name!')
        if(name) {
            setName(keyLocalStore, name)
        }
    }

    return (
        <div className="task-counter">
            <h2>{`Hi!, ${name}`}</h2><span className="icon icon-edit icon-position" onClick={handleClick}></span>
            <h2>{`Has completado ${completed} task de ${total} tasks`}</h2>
        </div>
    );
}

export {TaskCounter};