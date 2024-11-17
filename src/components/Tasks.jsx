import PropTypes from "prop-types";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-6 text-xl text-slate-800">
          Try adding some tasks ↑ ↑ ↑
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-slate-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-slate-700 hover:text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};
