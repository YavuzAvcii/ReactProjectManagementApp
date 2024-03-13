import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDueDate = dueDate.current.value;

    onAddProject({
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      id: Math.random(),
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 px-6 py-2 rounded-md hover:bg-stone-200 ">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="text-stone-50 px-6 py-2 rounded-md bg-stone-700 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <div>
        <Input ref={title} label="title" />
        <Input ref={description} label="description" textarea />
        <Input type="date" ref={dueDate} label="date" />
      </div>
    </div>
  );
}
