import Button from "./Button";

export default function ProjectsSidebar({
  onOpenAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-stone-950 px-8 py-16 md:w-72 text-stone-100 rounded-r-xl">
      <h2 className="font-bold mb-7 uppercase md:text-2xl">Your Projects</h2>
      <div>
        <Button onClick={onOpenAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let stylings =
            "w-full text-left px-2 py-2 my-1 rounded-md hover:text-stone-200 hover:bg-stone-800 ";
          if (project.id === selectedProjectId) {
            stylings += " bg-stone-900 text-stone-200";
          } else {
            stylings += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={stylings}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
