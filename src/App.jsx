import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todoSlice";
import Todo from "./components/Todo";

const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = loadTodosFromLocalStorage();
    savedTodos.forEach((todo) => {
      dispatch(addTodo({ todo: todo.todo }));
    });
  }, [dispatch]);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  return (
    <>
      <AddTodo />
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default App;
