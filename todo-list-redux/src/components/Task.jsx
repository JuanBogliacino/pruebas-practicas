import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../reducers/task/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <div className="task">
      <p>{task.title}</p>
      <div className="actions">
        <input
          type="checkbox"
          checked={task.complete}
          onChange={() => handleCompleteTask(task.id)}
        />
        <button className="delete" onClick={() => handleDeleteTask(task.id)}>
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
