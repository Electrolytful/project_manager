import Input from "./Input";
import Button from "./Button";

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
          <Button>Add Project</Button>
        </li>
      </menu>
    </div>
  );
}
