import Input from "./Input";

export default function AddProject() {
  return (
    <div className="w-[35rem] h-min py-8 px-16 m-auto rounded-lg self-center bg-slate-900 text-slate-100">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>

      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
