import PropTypes from "prop-types";
import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleClick = () => {
    if (taskInput.trim() === "") {
      return;
    }

    onAdd(taskInput);
    setTaskInput("");
  };

  return (
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
  );
}

NewTask.propTypes = {
  onAdd: PropTypes.func,
};
