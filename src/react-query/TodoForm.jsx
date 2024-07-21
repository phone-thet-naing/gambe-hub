import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

const TodoForm = () => {
    const [todoTitle, setTodoTitle] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const queryClient = useQueryClient()

    const addTodo = useMutation({
        mutationFn: async (todo) => {
            return axios
                .post("https://jsonplaceholder.typicode.com/todos", todo)
                .then((res) => res.data)
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData(['todos'], (todo) => [savedTodo, ...todo])
            setTodoTitle('')
        },
        onError: (error) => {
            setShowModal(true)
            setError(error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (todoTitle.trim()) {
            const todo = {
                userId: 1,
                id: 0,
                title: todoTitle,
                completed: false
            }
            addTodo.mutate(todo)
        }
    }

    return (
        <>
            {addTodo.isLoading && <p className="text text-info">Loading...</p>}

            <form onSubmit={handleSubmit}>
                <div className="w-50 p-3 d-flex">
                    <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} type="text" className="form-control mr-3" />
                    <input type="submit" value="Add" className="btn btn-primary" />
                </div>
            </form>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none', color: 'black'}} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">{error}</h5>
                            <button type="button" onClick={() => setShowModal(false)} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm