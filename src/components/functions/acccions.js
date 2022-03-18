class AccionsTasks {
    
    constructor(tasks) {
        this.tasks = tasks;
    }

    add (task) {
        const newTasks = [...this.tasks]
        newTasks.push(task)
        return newTasks;
    }

    complete (id) {
        const newTasks = this.tasks.map(task => {
            if(task.id === id) {
              task.done = !task.done;
            }
            return task;
          })
        return newTasks;
    }

    delete (id) {
        const newTasks = this.tasks.filter(task => task.id !== id);
        return newTasks;
    }

}


export { AccionsTasks };
