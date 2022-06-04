import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { addTodo, deleteTodo, editTodo, getTodos } from './features/todoSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import { Todo, Todos } from './interfaces'

const App: React.FC = () => {

const [todo, setTodo] = useState<string>('')
const [todoEditing, setTodoEditing] = useState('')
const [editTitle, setEditTitle] = useState('')
const dispatch = useAppDispatch()
const inputRef = useRef<HTMLInputElement>(null);
const todos = useAppSelector(state => state.todos.todos)


useEffect(() => {
  if(inputRef && inputRef.current) {
    inputRef.current.focus()
  }
  dispatch(getTodos())
}, [])

const handleSubmit =  (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  dispatch(addTodo(todo))
  setTodo('')
  inputRef.current?.focus()
}

const handleEdit = (id: string) => {
  setTodoEditing(id)

}

const handleEditSubmit = (id: string) => {
  dispatch(editTodo({id, title: editTitle}))
  inputRef.current?.focus()
  setTodoEditing('')
  setEditTitle('')

}

  return (
    <div>
      <h1>Todos</h1>
      <form action="">
        <input
         type="Enter todo"
         value={todo}
         onChange={e => setTodo(e.target.value)}
         ref={inputRef}
         />
         <button onClick={handleSubmit}>Add todo</button>
      </form>

      {todos.map(todo => <div key={todo.id}>
{todoEditing === todo.id ? (
  <section>
    <input 
    type="text"
    value={editTitle}
    onChange={e => setEditTitle(e.target.value)}
    />
    <button onClick={() => handleEditSubmit(todo.id)}>Submit</button>
  </section>
) : (
        <section>
      {todo.title}
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </section>
)}
      </div>)}

    </div>
  )
}

export default App