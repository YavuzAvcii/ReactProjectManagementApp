import Button from "./Button";

export default function ProjectsSidebar({ onOpenAddProject, projects }) {
  return (
    <aside className="w-1/3 bg-stone-950 px-8 py-16 md:w-72 text-stone-100 rounded-r-xl">
      <h2 className="font-bold mb-7 uppercase md:text-2xl">Your Projects</h2>
      <div>
        <Button onClick={onOpenAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-2 my-1 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-800 ">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
