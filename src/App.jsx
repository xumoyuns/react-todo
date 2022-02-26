import React  from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {

  const [todos, setTodos] = React.useState([

  ]);
 const handleClick=(evt)=>{
   const todoId =evt.target.dataset.todoId -0;

   const filteredTodos=todos.filter((item)=> item.id !==todoId)
   setTodos.filteredTodos])

  }
  return (
    <div className="header-container">
    <h1 className="site-header">Todo List</h1>
      <input
        onKeyPress={(evt) => {
          if (evt.code === "Enter") {
            const newTodo = {
              id: todos[todos.length - 1]?.id + 1 || 0,
              title: evt.target.value,
              isCompleted: false,
            };
            evt.target.value=null;
            setTodos([...todos, newTodo]);
          }

        }}
        className="todo-input"
        type="text"

        placeholder="Typing todo..."
      />
      <ul className="todo-list">
        {todos.map((item) => (
          <Todo key={item.id} id={item.id} handleClick={handleClick}>
            {item.title}
          </Todo>
        ))}
      </ul>

    </div>
  );
}

export default App;
