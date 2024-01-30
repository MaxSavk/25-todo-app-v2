import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const addSubmitHandler = (event) => {
        event.preventDefault();
        {!!text.length && addTodo(text)};
        setText("");
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={addSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type="submit" title='Submit'>Submit</Button>
            </form>
        </div>
    );
}

export default TodoForm;
