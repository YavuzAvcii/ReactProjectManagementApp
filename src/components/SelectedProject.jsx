import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const dueDate = new Date(project.dueDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-1/2 mt-16 text-left">
      <header className="border-b-2 border-stone-300">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-900">{project.title}</h1>
          <Button onClick={() => onDeleteProject(project.id)}>Delete</Button>
        </div>
        <p className="text-stone-500 mb-5">{dueDate}</p>

        <p className="text-lg whitespace-pre-wrap text-stone-700">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
