import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

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
    console.log(newProject);
    // TODO: active project will be equal to newProject.id
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProject: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProject: id,
      };
    });
  }

  let content;

  if (projectsState.activeProject === undefined) {
    content = <NoProjectSelected onOpenAddProject={handleOpenAddProject} />;
  } else if (projectsState.activeProject === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddProject}
        onAddProject={hanldeAddProject}
      />
    );
  } else {
    const selectedProject = projectsState.projects.find(
      (p) => p.id === projectsState.activeProject
    );
    content = <SelectedProject project={selectedProject} />;
  }

  // content = (
  //   <SelectedProject
  //     project={{
  //       title: "Project mgmt app",
  //       description: "Some Description",
  //       dueDate: "1995-12-17T03:24:00",
  //     }}
  //   />
  // );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        selectedProjectId={projectsState.activeProject}
        onSelectProject={handleSelectProject}
        onOpenAddProject={handleOpenAddProject}
        projects={projectsState.projects}
      />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
