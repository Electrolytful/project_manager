import PropTypes from "prop-types";

export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full mt-16 p-4">
      <header className="pb-4 mb-4 border-b-2 border-slate-300">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-slate-600">
            {project.title}
          </h1>
          <button className="text-slate-600 hover:text-slate-950">
            Delete
          </button>
        </div>

        <p className="mb-4 text-slate-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-slate-600">
          {project.description}
        </p>
      </header>

      {/* list of tasks */}
    </div>
  );
}

SelectedProject.propTypes = {
  project: PropTypes.object,
};
