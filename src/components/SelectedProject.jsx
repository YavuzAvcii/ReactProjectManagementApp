import Button from "./Button";

export default function SelectedProject({ project }) {
  const dueDate = new Date(project.dueDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-1/2 mt-16 text-center">
      <header className="border-b-2 border-stone-300">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-900">{project.title}</h1>
          <Button>Delete</Button>
        </div>
        <p className="text-xl whitespace-pre-wrap">{project.description}</p>
        <p className="text-right">{dueDate}</p>
      </header>
      // TODO: Add tasks
    </div>
  );
}
