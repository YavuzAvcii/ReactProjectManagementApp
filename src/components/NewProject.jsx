import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDueDate = dueDate.current.value;

    if (
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newDueDate.trim() === ""
    ) {
      return modal.current.open();
    }

    onAddProject({
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      id: Math.random(),
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 my-4">
          Something Wrong!
        </h2>
        <p>Please check if you entered valid values for all the input fields</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onCancel}
            className="text-stone-800 px-6 py-2 rounded-md hover:bg-stone-200 "
          >
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
    </>
  );
}
