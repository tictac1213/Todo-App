import { useState } from 'react'
import { CreateTodo } from './Components/createTodo'
import { Todo } from './Components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todo></Todo>
    </>
  )
}

export default App
