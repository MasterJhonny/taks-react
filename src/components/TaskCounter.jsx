import React from 'react'

// import hooks custom
import { useLocalStorage } from './CustomHooks/useLocalStorage'

// key name local store
const KEY_NAME_LOCALSTORE = 'data-name-v1';

function TaskCounter({ completed, total }) {

    // set name and
    const [name, setName] = useLocalStorage(KEY_NAME_LOCALSTORE,'Jhonny')

    function handleClick () {
        const newName = prompt('Update name!')
        if(newName) {
            setName(KEY_NAME_LOCALSTORE, newName)
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