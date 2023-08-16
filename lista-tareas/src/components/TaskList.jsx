import { useState } from "react"
import TaskItem from "./TaskItem"

const tareas = [
    { id: 1, title: "Terminar el informe", completed: false },
    { id: 2, title: "Hacer ejercicio", completed: true },
    { id: 3, title: "Comprar víveres", completed: false },
  ]

const TaskList = () => {
    const [tasks, setTasks] = useState(tareas)

    const handleTaskClick = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    };

  return (
    <div className="container">
      <h1>Tareas</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList