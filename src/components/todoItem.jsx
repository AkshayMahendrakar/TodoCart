import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item);

    setTodos(todos.filter((todo) => todo != item));
  }

  function handleClick(item) {
    const newTodos = todos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : todo
    );
    console.log("newTodos", newTodos);
    setTodos(newTodos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
