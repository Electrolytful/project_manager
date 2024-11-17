import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-700">Tasks</h2>
      <NewTask />
      <p className="my-6 text-xl text-slate-800">Try adding some tasks ↑ ↑ ↑</p>
      <ul></ul>
    </section>
  );
}
