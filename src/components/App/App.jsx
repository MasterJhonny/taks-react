import React, { useState, useEffect } from 'react'

import './App.css'

// import hooks custom
import { useLocalStorage } from '../CustomHooks/useLocalStorage'

// import provider
import { LocalStoreContextProvider } from '../context/ContextLocalStore'

// import components
import { Header } from '../Header/Header'
import { Search } from '../Search'
import { ListTasks } from '../ListTasks'
import { Task } from '../Task/Task'
import { CreateButton } from '../CreateButton'
import { TaskCounter } from '../TaskCounter'
import { Modal } from '../Modal'
import { ModalAdd } from '../Modal/ModalAdd'

// key localstore
const KEY_DATA_LOCALSTORE = 'data-tasks-v1';

// data source
const list_tasks = [
  {
    id: '1',
    title: 'Task de comer',
    description: 'this is a task new!',
    done: false,
  },
  {
    id: '2',
    title: 'Task de vestir',
    description: 'this is a task new!',
    done: true,
  },
  {
    id: '3',
    title: 'como viem',
    description: 'this is a task new!',
    done: false,
  },
]

function App() {

  // use local Store
  const [dataTasks, setDataTasks] = useLocalStorage(KEY_DATA_LOCALSTORE, list_tasks);

  // state of search
  const [search, setSearch] = useState('')

  // state for open modal input
  const [openModal, setOpenModal] = useState(false)

  // state list tasks
  const [tasks, setTasks] = useState(dataTasks)

  // total de tasks
  const total = dataTasks.length;

  // total de tasks completed
  const completed = tasks.filter(task => task.done === true).length;

  // expression regex and filter tasks
  const expre = new RegExp(search, 'i')
  const searchName = tasks.filter(task => expre.test(task.title)).reverse()

  // effect in the count of tasks
  useEffect(() => {
    setTasks(dataTasks)
  }, [total])

  return (
    <React.Fragment>
      <Header/>
      <TaskCounter
        completed={completed}
        total={total}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <LocalStoreContextProvider value={{ dataTasks, setDataTasks }}>
        <ListTasks>
          {searchName.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              done={task.done}
            />
          ))}
        </ListTasks>
          <CreateButton
            setOpenModal={setOpenModal}
          />
          <Modal>
            {openModal ? <ModalAdd setOpenModal={setOpenModal} /> : null}
          </Modal>
      </LocalStoreContextProvider>
    </React.Fragment>
  )
}

export default App
