import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../reducers/task/taskSlice"
import { v4 as uuidv4 } from 'uuid'

const TaskForm = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() == '') return

        const newTask = {
            id: uuidv4(),
            title: inputValue,
            complete: false
        }

        dispatch(createTask(newTask))
        setInputValue('')
    }

  return (
    <>
    <h2>Crear tarea</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className="selected">crear</button>
    </form>
    </>
  )
}

export default TaskForm