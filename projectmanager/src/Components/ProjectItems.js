import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";

class ProjectsItems extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="ProjectsItems">
        {" "}
        <strong>{this.props.project.title}</strong> {"  "}
        {this.props.project.category}
      </li>
    );
  }
}

export default ProjectsItems;
