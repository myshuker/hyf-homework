import React from "react";
import ReactDOM from "react-dom";
import './index.css';
const root = document.getElementById("root");




const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = [  'January', 'February',  'March',   'April', 'May',   'June',    
'July', 'August',   'September',  'October',   'November',  'December'  ];

    const today = new Date()
    
    const year = today.getFullYear() 
    const getMonth =today.getMonth() 
    const getDay = today.getDate()-1
    const hour = today.getHours()
    const minute =  today.getMonth()

    const month = months[getMonth]
    const dayNumber = (getDay%weekDays.length)
    const day = weekDays[dayNumber]

//     const date1 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+hour+ ':' + minute
//     const date2 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+hour+ ':' + minute
//     const date3 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+hour+ ':' + minute
// //console.log(date); 
// const arrayOfDeadlineDate =[date1, date2, date3]

const date1 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+' at '+ 6 + ':' + '00'
const date2 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+' at '+6+ ':' + '30'
const date3 = day + ', '+ (getDay +1) +' '+ month+ ' '+year +', '+' at '+7+ ':' + '00'
//console.log(date); 
const arrayOfDeadlineDate =[date1, date2, date3]
console.log(arrayOfDeadlineDate);

const arrayOfTodo = [
  {
    description: "Get out of bed",
    deadlineDate: date1
  },
  {
    description: "Brush teeth",
    deadlineDate:date2
  },
  {
    description: "Eat breakfast",
    deadlineDate:date3
  }
];

function Header() {
  return <h1>Todo List App</h1>;
};

function TodoList(props) {
  const todosActions = props.todos.map(todo => {
  return <li>{todo.description}, {todo.deadlineDate} </li>;
  });
  return <ul>{todosActions}</ul>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList todos ={arrayOfTodo} />
        <Footer />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <h3>Enjoy with a fresh day</h3>;
  }
};


ReactDOM.render(<App />, root);