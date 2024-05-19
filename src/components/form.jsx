import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    setTodos([...todos, todo]);
    e.preventDefault();
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modelInput}
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          value={todo.name}
          type="text"
          placeholder="Enter todo item"
        ></input>
        <button
          className={styles.modelButton}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
