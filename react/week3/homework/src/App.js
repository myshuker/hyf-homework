import React from "react";
import TodoItems from "./component/TodoItems";
import AddItem from "./component/AddItem";


function fetchTodo() { 
  const URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`
  return fetch(URL).then((response) => response.json())
}

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetchTodo().then(body=>{
      this.setState({ 
        todos: body
      })
    })
  }

  deleteItem =(id) =>{
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
    let items = this.state.todos.map((item) => {
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

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.todos;
    items.push(item);
    this.setState({ items });
  };

  
  
/* 
  editItem = (id) => {
    console.log(id);
    console.log('from edit');
    this.setState({
      todos: this.state.todos.map((item, index) => {
        if (id === index) {
          return {
            ...item,
            description: (
              <input type="text"  placeholder="update todo"  onChange={(e) => {this.setState({ updateInput: e.target.value })}}
              />
            ),
          };
        } else {
          return item;
        }
      }),
    })
  };
 */
  
handleChange = (e) => {
  //  console.log(e.target.value);
  this.setState({
    [e.target.id]: e.target.value,
  });
};

updateItem = (id) => {
  console.log(id);
  console.log('from Update');
 
};

editItem = (id) => {
  console.log(id);
  let items = this.state.todos.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        description: ( 
        <input type="text"  placeholder="update Todo" onChange={this.handleChange}/>
        )
      };
    } else {
      return item;
    }
  });
  this.setState({
    todos: items,
  });
};


  render() {
    return (
      <div >
        <AddItem addItem={this.addItem} />
        <TodoItems
          items={this.state.todos}
          deleteItem={this.deleteItem}
          todoCompleted={this.todoCompleted} editItem={this.editItem} updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default App;
