import PropTypes from "prop-types";
import Button from "./Button";

export default function NoProject({ onStartAddProject }) {
  return (
    <div className="text-center w-[35rem] m-auto self-center">
      <h2 className="mb-4 text-xl font-bold text-slate-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-slate-400">Select a project or start a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Start new project</Button>
      </p>
    </div>
  );
}

// defining prop types for the NoProject component
NoProject.propTypes = {
  onStartAddProject: PropTypes.func,
};
