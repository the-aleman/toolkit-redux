import { useState } from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const prevTodo = () => {
    if (todoId === 1) return

    setTodoId(todoId - 1)
  }

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
              {todo.title}
            </li>
          ))
        }
      </ul> */}

      <button
        onClick={prevTodo}
      >
        Prev Todo
      </button>
      <button
        onClick={nextTodo}
      >
        Next Todo
      </button>
    </>
  )
}
