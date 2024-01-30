import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from './TodosActions.module.css'

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodos }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteCompletedTodos}
                disabled={!completedTodos}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodoActions;
