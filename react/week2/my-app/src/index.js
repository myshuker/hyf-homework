import React from "react";
import ReactDOM from "react-dom";
import GetTodoList from "./App";
import Counter from "./Counter";

const root = document.getElementById("root");

function Header() {
  return (
    <div>
      <h1>Todo List App</h1>
    </div>
  );
}

function Footer() {
  return <h3>Enjoy with a fresh day</h3>;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Counter initialCounter={0} />
        <GetTodoList />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
