import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Counter from "./Counter";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <Counter initialCounter={0} />
        <App />
        <h3>Enjoy with a fresh day</h3>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<Main />, root);

