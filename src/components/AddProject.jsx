import Input from "./Input";

export default function AddProject() {
  return (
    <div className="w-[35rem] h-min py-8 px-16 m-auto rounded-lg self-center bg-slate-900 text-slate-100">
      <h2 className="text-xl font-bold uppercase">Enter project details</h2>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-red-500 hover:text-red-800">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-green-700 text-slate-200 hover:text-slate-50 hover:bg-green-500">
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
