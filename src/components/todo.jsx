import { useState } from "react";
import TodoItem from "./todoItem";
import Form from "./form";
import TodoList from "./todoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} />
    </div>
  );
}
