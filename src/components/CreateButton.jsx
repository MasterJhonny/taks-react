import React, { useContext }from 'react';

// imoport context
import { LocalStoreContext } from './context/ContextLocalStore'
import { AccionsTasks } from './functions/acccions'


// key localstore
const KEY_DATA_LOCALSTORE = 'data-tasks-v1';

import { v4 as uuidv4 } from 'uuid';


function CreateButton() {
    
    const { dataTasks, setDataTasks } = useContext(LocalStoreContext)

    // init acciones tasks
    const acccion = new AccionsTasks(dataTasks)

    // function to add tasks
    function handleCreateTodo() {

        const id = uuidv4();
        const title = prompt('Add new Task!, insert title.');

        if(id && title) {
            const newTask = {
                id,
                title,
                description: 'this is a task new!',
                done: false,
            }
            const newTasks = acccion.add(newTask)
            setDataTasks(KEY_DATA_LOCALSTORE, newTasks)
        }
    }

    return (
        <button className="btn btn-add" onClick={handleCreateTodo}>+</button>
    );
}

export { CreateButton };