import React, { useState } from 'react'

const TasksContext = React.createContext(null);

function TasksContextProvider({ children, value }) {
    const [tasks, setTasks] = useState(value);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}

export { TasksContext, TasksContextProvider };