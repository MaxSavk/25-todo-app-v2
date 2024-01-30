import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleToHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodoActions
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                    completedTodos={!!completedTodosCount}
                />
            )}
            <TodoList
                toggleTodo={toggleToHandler}
                deleteTodo={deleteTodoHandler}
                todos={todos}
            />
            {!!todos.length && (
                <h2>{`You have completed ${todos.length} ${
                    todos.length > 1 ? "todos" : "todo"
                }`}</h2>
            )}
            {console.log(todos)}
        </div>
    );
}

export default App;
