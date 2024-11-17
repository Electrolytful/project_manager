import { useState } from "react";
import { Sidebar, AddProject, NoProject, SelectedProject } from "./components";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // handler function to change the current selected project state to null, triggering the window for adding a project to show
  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  // handler function to change the current selected project state to undefined, effectively cancelling the adding of a project
  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  // handler function to add a project to the global state based on the input passed in by the user
  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        id: projectId,
        ...projectData,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // handler function for adding a task to an existing project
  const handleAddTask = (task) => {
    setProjectState((prevState) => {
      const taskId = Math.random();

      const newTask = {
        text: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  // handler function to delete the selected task
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  // handler function to delete the selected task from the selected project
  const handleDeleteTask = () => {};

  // handler function to set the selected project id to the id of the project that the user selects on the sidebar
  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  // variable that stores the project that the user currently has selected, passed into the SelectedProject component
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // YES I KNOW IT'S PROP DRILLING
  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  // assigning the content of the page based on whether a project is selected, being added or no project currently exists
  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <AddProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  }

  return (
    <main className="w-full h-screen flex">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      <div className="w-full flex flex-col">{content}</div>
    </main>
  );
}
