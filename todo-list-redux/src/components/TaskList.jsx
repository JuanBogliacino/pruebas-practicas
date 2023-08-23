import { useSelector } from "react-redux";

import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("Todas");

  return (
    <>
      <TaskForm />
      {tasksList.length > 0 ? (
        <>
          <h2>Lista de tareas</h2>
          <div className="tasks-container">
            {tasksList
              .filter((task) => {
                if (filter === "Completadas") {
                  return task.complete;
                } else if (filter === "Pendientes") {
                  return !task.complete;
                }
                return true;
              })
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className="filter-buttons">
            <button
              onClick={() => setFilter("Todas")}
              className={`${filter == "Todas" ? "selected" : ""}`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter("Completadas")}
              className={`${filter == "Completadas" ? "selected" : ""}`}
            >
              Completadas
            </button>
            <button
              onClick={() => setFilter("Pendientes")}
              className={`${filter == "Pendientes" ? "selected" : ""}`}
            >
              Pendientes
            </button>
          </div>
        </>
      ) : (
        <p>No hay tareas creadas</p>
      )}
    </>
  );
};

export default TaskList;
