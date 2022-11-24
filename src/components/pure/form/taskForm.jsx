import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, len }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <select
          className="form-control form-control-lg"
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id="selectLevel"
        >
          <option value={LEVELS.NORMAL} className="badge bg-primary">
            Normal
          </option>
          <option value={LEVELS.URGENT} className="badge bg-warning">
            Urgente
          </option>
          <option value={LEVELS.BLOCKING} className="badge bg-danger">
            Blocking
          </option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          {len ? "Add new task" : "Create your first task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.prototype = {
  add: PropTypes.func.isRequired,
  len: PropTypes.number.isRequired,
};

export default TaskForm;
