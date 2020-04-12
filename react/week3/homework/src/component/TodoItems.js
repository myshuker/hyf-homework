import React from "react";

const TodoItems = (props) => {
  //console.log(props);
  const { items, deleteItem, todoCompleted, editItem, updateItem } = props;
  const length = items.length;
  const showItems = length ? (
    items.map((item) => {
      return (
        <div>
          <li
            key={item.id}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.description} | {item.deadline}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => todoCompleted(item.id)}
            />
            <button onClick={() => deleteItem(item.id)}>Delete</button> 
            <button  onClick={() => editItem(item.id)}>Edit</button>
            <button >Update</button>

          </li>
        </div>
      );
    })
  ) : (
    <p>NO items to show</p>
  );
  return <div>{showItems}</div>;
};

export default TodoItems;
