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
    activeProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleOpenAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, activeProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    const newProject = projectData;
    // TODO: active project will be equal to newProject.id
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        activeProjectId: undefined,
        projects: prevState.projects.filter((p) => p.id !== id),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const task = {
        id: taskId,
        text: text,
        projectId: prevState.activeProjectId,
      };
      return {
        ...prevState,
        tasks: [task, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.activeProjectId
  );
  const selectedTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.activeProjectId
  );
  let content = (
    <SelectedProject
      onDeleteProject={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTasks}
    />
  );

  if (projectsState.activeProjectId === undefined) {
    content = <NoProjectSelected onOpenAddProject={handleOpenAddProject} />;
  } else if (projectsState.activeProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddProject}
        onAddProject={handleAddProject}
      />
    );
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
        selectedProjectId={projectsState.activeProjectId}
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
