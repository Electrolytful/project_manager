import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import PropTypes from "prop-types";

export default function AddProject({ onAddProject, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // function to get the values entered by the user and use the function passed in as a prop to save it to the global projects state
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="mb-4 text-xl font-bold text-slate-500">Invalid Input</h2>
        <p className="mb-4 text-slate-600">
          Please enter a valid value for every field.
        </p>
      </Modal>
      <div className="w-[35rem] h-min py-8 px-16 m-auto rounded-lg self-center bg-slate-900 text-slate-100">
        <h2 className="text-xl font-bold uppercase">Enter project details</h2>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-red-500 hover:text-red-800"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button type="save" onClick={handleSave}>
              Save
            </Button>
          </li>
        </menu>
      </div>
    </>
  );
}

// defining the prop types for the AddProject component
AddProject.propTypes = {
  onAddProject: PropTypes.func,
  onCancel: PropTypes.func,
};
