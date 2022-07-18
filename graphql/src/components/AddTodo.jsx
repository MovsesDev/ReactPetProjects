import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_TODOS } from '../apollo/todos'
import { ALL_TODOS } from '../apollo/todos'

const AddTodo = () => {

  const [todo, setTodo] = useState('')
  const [addTodo, { error }] = useMutation(ADD_TODOS, {
    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODOS })

      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [newTodo, ...todos]
        }
      })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({
      variables: {
        userId: 123,
        title: todo,
        completed: false
      }
    })
    setTodo('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <form>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handleSubmit} onKeyPress={handleKeyPress}>Add todo</button>
    </form>
  )
}

export default AddTodo