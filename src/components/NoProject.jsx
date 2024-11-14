import Button from "./Button";

export default function NoProject() {
  return (
    <div className="text-center w-full self-center">
      <h2 className="mb-4 text-xl font-bold text-slate-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-slate-400">Select a project or start a new one</p>
      <p className="mt-8">
        <Button>Start new project</Button>
      </p>
    </div>
  );
}
