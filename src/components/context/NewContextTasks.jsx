import React, { useState } from 'react'

const NewTaskContext = React.createContext(null);

function NewTasksContextProvider({ children, value }) {
    const [newTask, setNewTask] = useState(value);

    return (
        <NewTaskContext.Provider value={{ newTask, setNewTask }}>
            {children}
        </NewTaskContext.Provider>
    );
}

export { NewTaskContext, NewTasksContextProvider };