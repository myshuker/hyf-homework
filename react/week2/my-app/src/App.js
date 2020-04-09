import React from "react";

// Start TodoItems Component
const TodoItems = (props) => {
  console.log(props);
  const { items, deleteItem, todoCompleted } = props;
  const length = items.length;
    const showItems = length ? (
    items.map((item) => {
      return (
        <div>          
        <li key={item.id} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          {item.description}
          {/* <input type="checkbox" checked={item.completed} onChange={todoCompleted} /> */}
          <input type="checkbox" checked={item.completed} onChange={() => todoCompleted(item.id)} />
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
        </div>
      );
    })
  ) : (
    <p>NO items to show</p>
  );
  return <div>{showItems}</div>;
};

// END TodoItems Component

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        description: "Get out of bed",
        completed: false,
      },
      {
        id: 2,
        description: "Brush teeth",
        completed: false,
      },
      {
        id: 3,
        description: "Eat breakfast",
        completed: false,
      },
      {
        id: 4,
        description: "Go the work",
        completed: false,
      },
      {
        id: 5,
        description: "Come home",
        completed: false,
      },
    ],
  };

  // first way to delete
  //  deleteItem = (id) => {
  //   console.log(id);
  //   let items = this.state.todos;
  //   let index = items.findIndex((item) => item.id === id);
  //   items.splice(index, 1);
  //   this.setState({ todos: items, });
  // };

  // another way to delete
  deleteItem = (id) => {
    console.log(id);
    let items = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: items,
    });
  };

  
  todoCompleted = (id) => {
    console.log(id);
    let items = this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      todos: items,
    });
  };

  handleAdd = () => {
    console.log("hello");
    const randomId = Math.random();
    const newItem = {
      id: randomId,
      description: "random Todo",
      completed: false,
    };
    const newList = [...this.state.todos, newItem];
    this.setState({
      todos: newList,
    });
  };

  render() {
    return (
      <div>
        <input type="button" value="Add Todo" onClick={this.handleAdd} />
        <TodoItems
          items={this.state.todos}
          deleteItem={this.deleteItem}
          todoCompleted={this.todoCompleted}
        />
      </div>
    );
  }
}

export default App;
