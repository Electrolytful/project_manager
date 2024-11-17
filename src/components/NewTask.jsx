export default function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-slate-200" />
      <button className="text-slate-700 hover:text-slate-950">Add Task</button>
    </div>
  );
}
