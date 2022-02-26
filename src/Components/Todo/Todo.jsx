import React from "react";

function Todo({ children, id ,handleClick}) {
  return (
    <li className="input-item" >
      <span className="todo-title">{children}</span>
      <button className="delete-todo" data-todo-id={id} onClick={handleClick}>Delete</button>
    </li>
  );
}

export default Todo;
