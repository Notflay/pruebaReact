import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

// Importamos la hoja de estilos de task
import "../../styles/task.scss";
import TaskForm from "../pure/form/taskForm";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    true,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Example2",
    "Default description 2",
    false,
    LEVELS.URGENT
  );

  const defaultTask3 = new Task(
    "Example3",
    "Default description 3",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  function completeTask(task) {
    console.log("Complete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    //We update the state of the component with the new list of  the tasks and it will update the
    //Iteration of the tasks in order to show the task updated
    setTasks(tempTask);
  }

  function deleteTask(task) {
    console.log("Completed this task: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log("Completed this task: ", task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, []);

  /* Function that returns a Badge
   * depending on the level of the task */

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
          {/* TODO: iterar sobre una lista de tareas */}
        </tbody>
      </table>
    );
  };

  let tasksStable;

  if (tasks.length > 0) {
    tasksStable = <Table></Table>;
  } else {
    tasksStable = (
      <div>
        <h3>There are no tasks to show</h3>{" "}
        <h4 style={{ textAlign: "center" }}>Please, create one</h4>
      </div>
    );
  }

  const loadingStyle = {
    color: "grey",
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header ( title ) */}
          <div className="card-header p-3">
            <h5>
              <h1>Your tasks:</h1>
            </h5>
          </div>
          {/* Card Header ( content ) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            {loading ? (
              <p style={loadingStyle}>loading tasks...</p>
            ) : (
              tasksStable
            )}
          </div>
        </div>
        <TaskForm add={addTask} len={tasks.length}></TaskForm>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
    </div>
  );
};

export default TaskListComponent;
