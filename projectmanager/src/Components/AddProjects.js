import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";
class AddProjects extends Component {
  static defaultProps = { categories: ["KL", "ML", "KP"] };
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("Title is required");
    } else {
      this.setState(
        {
          newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          console.log(this.state);
          this.props.addProjects(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }
  render() {
    let catMap = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{catMap}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProjects;
