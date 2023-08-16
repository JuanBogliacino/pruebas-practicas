import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setComletedTasks] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() == '') return

        const newTasks = [...tasks, {
            todo: inputValue,
            done: false,
            id: uuidv4()
        }]
        
        setInputValue('')
        setTasks(newTasks)
    }

    const handleDelete = (id) => {
        const tasksFiltered = tasks.filter(task => task.id !== id)

        const taskDone = tasksFiltered.filter(task => task.done);
        setComletedTasks(taskDone.length);

        setTasks(tasksFiltered)
    }

    const handleDone = (id) => {
        const taskFind = tasks.find(task => task.id === id)
        taskFind.done = !taskFind.done

        const taskDone = tasks.filter(task => task.done);
        setComletedTasks(taskDone.length);
    }

    

  return (
    <>
    <h1>Lista de tareas</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <button type="submit">Enviar</button>
    </form>

    <h2>total de tareas: {tasks.length}</h2>
    <h2>total de tareas completadas: {completedTasks}</h2>

    <div className="tasks-container">
    {tasks.map(task => (
        <div key={task.id} className="tasks">
            <p>{task.todo}</p>
            <input type="checkbox" onClick={() => handleDone(task.id)} />
            <button onClick={()=> handleDelete(task.id)}>delete</button>
        </div>
    ))}
    </div>
    </>
  )
}

export default TodoApp