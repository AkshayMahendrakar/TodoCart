import styles from "./footer.module.css";

export default function Footer({ completedTodos }) {
  return (
    <div className={styles.footer}>
      <span>Completed: {completedTodos}</span>
    </div>
  );
}
