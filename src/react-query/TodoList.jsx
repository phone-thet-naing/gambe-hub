import { UnorderedList, ListItem, HStack, Input, Button, OrderedList, Text } from "@chakra-ui/react"
import useTodos from "./hooks/useTodos"

const TodoList = () => {

    const { data: todos, error, isLoading } = useTodos()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p style={{ color: "red" }}>{error}</p>

    return (
        <>
            <Text>Todo Count: {todos.length}</Text>
            <OrderedList>
                {todos.map((todo) =>
                    <ListItem key={todo.id}>{todo.title}</ListItem>
                )}
            </OrderedList>
        </>
    )
}

export default TodoList