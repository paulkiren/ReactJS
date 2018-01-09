import React, { Component } from "react";
// import logo from './logo.svg';
import Projects from "./Components/Projects";
import AddProjects from "./Components/AddProjects";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        { title: "Business", category: "Ki" },
        { title: "WEB", category: "LS" },
        { title: "Mobile", category: "KP" }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <AddProjects/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
