import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) => (
                <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
