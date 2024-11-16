import { useState } from "react";
import { Sidebar, AddProject, NoProject } from "./components";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
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

  let content;

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
    <main className="w-full h-screen flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}
