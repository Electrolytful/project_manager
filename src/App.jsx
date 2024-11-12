import { Sidebar, AddProject } from "./components";

export default function App() {
  return (
    <main className="w-full h-screen flex gap-8">
      <Sidebar />
      <AddProject />
    </main>
  );
}
