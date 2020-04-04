import React from "react";

const todoListArr = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
  {
    id: 4,
    description: "Go the work",
  },
  {
    id: 5,
    description: "Come home",
  },
];

class GetTodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = () => {
    console.log(todoListArr);
    console.log(todoListArr.length);

    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    if (randomNumber < todoListArr.length) {
      const randomItem = todoListArr[randomNumber].description;
      console.log(randomItem);

      const newTodo = this.state.todos.concat(randomItem);
      this.setState({ todos: newTodo }, () => {
        console.log("New todo has been added");
        todoListArr.splice(randomNumber, 1);
      });
    } else {
      console.log("item not found");
      const newText = "random text";
      const newTodoText = this.state.todos.concat(newText);
      this.setState({ todos: newTodoText }, () => {
        console.log("New todo text has been added");
      });
    }
  };

  // this code is not completed
  checkboxFunc = () => {
    console.log("checked");
    /*  style={{ textDecorationLine: 'line-through' }} */
  };

 // this code is not completed
  toDelete = (item) => {
    console.log("todo deleted");

   this code is not completed
  console.log(this.state.todos.length);
  if (this.state.todos.length === 0) {
     alert("No item");
     }
    
  render() {
    const newTodoItem = this.state.todos.map((todo) => (
      <div>
        {todo}
        <input type="checkBox" onClick={this.checkboxFunc} />
        <button onClick={this.toDelete}>Delete</button>
      </div>
    ));
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <br />
        {newTodoItem}
      </div>
    );
  }
}

export default GetTodoList;
