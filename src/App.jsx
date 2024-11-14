import { Sidebar, AddProject, NoProject } from "./components";

export default function App() {
  return (
    <main className="w-full h-screen flex gap-8">
      <Sidebar />
      <NoProject />
    </main>
  );
}
