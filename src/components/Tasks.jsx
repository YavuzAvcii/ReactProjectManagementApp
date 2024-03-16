import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {tasks.length === 0 ? (
        <p>This project has no tasks</p>
      ) : (
        <ul className="p-3 mt-8 bg-stone-100 rounded-sm ">
          {tasks.map((task) => (
            <li key={task.id} className="flex flex-row justify-between mt-6">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="py-1 px-2 text-stone-800 hover:text-red-500 hover:bg-stone-200"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
