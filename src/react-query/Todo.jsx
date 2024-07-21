import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

const Todo = () => {
    const styles = {
        marginLeft: "30px"
    }

    return (
        <div styles={styles}>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo