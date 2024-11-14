import { useState } from "react";
import { Sidebar, AddProject, NoProject } from "./components";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  return (
    <main className="w-full h-screen flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      {projectState.selectedProjectId === undefined && (
        <NoProject onAddProject={handleAddProject} />
      )}
      {projectState.selectedProjectId === null && <AddProject />}
    </main>
  );
}
