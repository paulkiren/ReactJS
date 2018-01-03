import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1> Shopping List for {this.props.name} </h1>
        <ul>
          <li>FaceBook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

ReactDOM.render(
  <ShoppingList name="Kiren" />,
  document.getElementById("root")
);
