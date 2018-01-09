import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";
import ProjectItems from "./ProjectItems";

class Projects extends Component {
  render() {
    let projectsItems;
    if (this.props.projects) {
      projectsItems = this.props.projects.map(project => {
        return <ProjectItems key={project.title} project={project} />;
      });
    }
    console.log(this.props.projects);
    return <div className="Projects"> {projectsItems}</div>;
  }
}

export default Projects;
