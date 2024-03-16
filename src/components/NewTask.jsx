import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal buttonCaption="Close" ref={modal}>
        Empty Task is not Allowed!
      </Modal>
      <div className="flex items-center flex-row gap-4">
        <input
          onChange={handleChange}
          type="text"
          className="py-1 w-64 bg-stone-200 rounded-sm"
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="py-1 px-2 rounded-sm bg-stone-300 text-stone-600 hover:bg-stone-400 hover:text-stone-100"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
