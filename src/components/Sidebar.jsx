import PropTypes from "prop-types";
import Button from "./Button";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 md:w-72 px-8 py-16 bg-slate-900 text-slate-50">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}

// defining prop types for the Sidebar component
Sidebar.propTypes = {
  onStartAddProject: PropTypes.func,
};
