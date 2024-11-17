import PropTypes from "prop-types";
import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [taskInput, setTaskInput] = useState("");
  const modal = useRef();

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleClick = () => {
    // show error if no value is entered
    if (taskInput.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(taskInput);
    setTaskInput("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="OK">
        Invalid input. Please enter a valid task.
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-slate-200"
          onChange={handleChange}
          value={taskInput}
        />
        <button
          className="text-slate-700 hover:text-slate-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

NewTask.propTypes = {
  onAdd: PropTypes.func,
};
