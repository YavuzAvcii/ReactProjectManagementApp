import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  // activeProject: null means user wants to add project
  // activeProject: udefined means noProjectSelected
  // activeProject: value means user wants to see the details of a specific project

  const [projectsState, setProjectsState] = useState({
    activeProject: undefined,
    projects: [],
  });

  function handleOpenAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, activeProject: null };
    });
  }

  function hanldeAddProject(projectData) {
    const newProject = projectData;
    // TODO: active project will be equal to newProject.id
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.activeProject === undefined) {
    content = <NoProjectSelected onOpenAddProject={handleOpenAddProject} />;
  } else if (projectsState.activeProject === null) {
    content = <NewProject onAddProject={hanldeAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onOpenAddProject={handleOpenAddProject}
        projects={projectsState.projects}
      />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
