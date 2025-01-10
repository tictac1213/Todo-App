import { useState } from 'react'
import { CreateTodo } from './Components/createTodo'
import { Todo } from './Components/Todo'
import './App.css'

function App() {
  const [todo, setTodo] = useState(0)
  fetch('https://localhost:3000/todos').then(
    async function (res){
      const json  = await res.json
      setTodo(json.todos)
    }
  )

  return <>
      <CreateTodo/>
      <Todo todos = {todo}/>
    </>
  
}

export default App
