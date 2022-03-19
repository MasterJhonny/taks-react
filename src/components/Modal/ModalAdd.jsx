import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import context
import { LocalStoreContext } from '../context/ContextLocalStore'
import { AccionsTasks } from '../functions/acccions'

// import functions to closed modal
import { scrollbar } from '../functions/scrcollbar'

// key localstore
const KEY_DATA_LOCALSTORE = 'data-tasks-v1';

function ModalAdd({ setOpenModal }) {


    const { dataTasks, setDataTasks } = useContext(LocalStoreContext)

    // state of the new a task
    const [task, setTask] = useState({ title: '', description: '' })

    const accions = new AccionsTasks(dataTasks)

    function handleOnSubmit (e) {
        e.preventDefault();

        const { title, description } = task;
        const id = uuidv4();

        if(id && title && description) {
            const newTask = {
                id,
                title,
                description,
                done: false,
            }
            const newTasks = accions.add(newTask)
            setDataTasks(KEY_DATA_LOCALSTORE, newTasks)
            scrollbar.remove()
            setOpenModal(false)
        }
    }

    function handleOnChange (e) {
        const item = e.target;

        setTask({
            ...task,
            [item.name]: item.value
        })
    }


    function closedModal () {

        scrollbar.remove()
        setOpenModal(false)
    }

    return (
        <div className="Modal-Background">
            <div className="modal modal-add">
                <span className="icon icon-closedModal" onClick={closedModal}></span>
                <form className="form" onSubmit={handleOnSubmit}>
                    <h2>Create new task</h2>
                    <input 
                        type="text" 
                        name="title" 
                        className="input input-add"
                        value={task.title} 
                        onChange={handleOnChange}
                        placeholder='Title' 
                        required/>
                    <br/>
                    <textarea 
                        name="description" 
                        className="input input-add texarea"
                        value={task.description}
                        onChange={handleOnChange} 
                        placeholder='Description' 
                        required
                    ></textarea>
                    <br/>
                    <button className="btn btn-modal" >Add</button>
                </form>
            </div>
        </div>
    );
}

export {ModalAdd};