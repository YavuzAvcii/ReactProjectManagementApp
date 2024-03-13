import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onOpenAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task paper"
        className="w-24 h-24 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-600 my-4">
        No Project Selected
      </h2>
      <p>Please select a project or create a new one</p>
      <p className="mt-6">
        <Button onClick={onOpenAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
