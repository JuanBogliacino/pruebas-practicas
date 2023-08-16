const TaskItem = ({ task, onTaskClick }) => {

  return (
    <>
          <li>
            <h2>{task.title}</h2>
            <button
             className={`${task.completed ? 'completada' : 'sin-completar'}`}
             onClick={()=> onTaskClick(task.id)} >
              {
                task.completed ? 'Completada' : 'Sin completar'
              }
            </button>
          </li>
    </>
  )
}

export default TaskItem