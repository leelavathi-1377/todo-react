import React, { useState } from 'react';
import Create from './Create';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
  //Static JSON data
  const [todos, setTodos] = useState([]);

  // 🔹 Toggle done/undone
  const handleEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 🔹 Delete todo
  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo._id !== id)
    );
  };

  return (
    <div className="home">
      <h2>To Do List</h2>

      {/* Optional: disable Create if not needed */}
      <Create addTodo={(newTodo) => setTodos((prev) => [...prev, newTodo])} />

      {todos.length === 0 ? (
        <div>
          <h2>No Items Found</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? 'line-through' : ''}>
                {todo.task}
              </p>
            </div>

            <div>
              <span onClick={() => handleDelete(todo._id)}>
                <BsFillTrashFill className="icon" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
