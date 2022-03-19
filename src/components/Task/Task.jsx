import React, { useContext } from 'react';

// imoport context
import { LocalStoreContext } from '../context/ContextLocalStore'
import { AccionsTasks } from '../functions/acccions'

// key localstore
const KEY_DATA_LOCALSTORE = 'data-tasks-v1';

import './Task.css'

function Task({ id, title, description, done }) {

    // state of tasks global
    const { dataTasks, setDataTasks } = useContext(LocalStoreContext);

    //init acciones
    const acciones = new AccionsTasks(dataTasks);

    // function to completed task
    function onCompleteTask () {
        if(!done) {
            alert(`Task ${title} Completed!`)
        } else {
            alert(`you haven't completed this task yet?`)
        }
        const newTasks = acciones.complete(id)
        setDataTasks(KEY_DATA_LOCALSTORE, newTasks)
    }

    // function to delete a task
    function onDeleteTask () {
        alert(`Delete this task from ${title}`)
        const newTasks = acciones.delete(id)
        setDataTasks(KEY_DATA_LOCALSTORE, newTasks)
    }

    // function to edit a task
    function onEditTask () {
        alert(`edit this task ${title}`)
    }


    return (
        <li className="task">
            <div className="task__container">
                <label className="task__item">
                    <input type="checkbox" defaultChecked={done} onClick={onCompleteTask}/>
                    <span className="task__des">{description}</span>
                    <span className="icon icon-check"></span>
                    <span className="task__text">{title}</span>
                </label>
                <span className="icon icon-edit" onClick={onEditTask}></span>
                <span className="icon icon-delete" onClick={onDeleteTask}></span>
            </div>
        </li>
    );
}

export { Task };