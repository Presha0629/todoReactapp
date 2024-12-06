import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [todos,setTodos]=useState([])
  const [inputVal,setInputVal]=useState("")
  const [completed,setCompleted]=useState([])
  const [showCompleted, setShowCompleted]=useState(true)
 

  const handleAdd=()=>{
    if( inputVal!==""){ setTodos((todos) => [...todos, inputVal])}
    setInputVal("")
  }

  const handleDelete=()=>{
    setTodos(todos.filter((todo) => !(todo === inputVal)))
    setInputVal("")
  }

  const handleClear =() => {
    setTodos([])
    setCompleted([])
  }

  const boxClick =(todo) => {
    if (!completed.includes(todo)) {
      setCompleted((completed) => [...completed, todo]);
      setTodos(todos.filter((incompTodo) => !(incompTodo === todo)))
    }
  }
  
  const handleCompleted =() => {
    if(showCompleted===true)
      setShowCompleted(false)
    else
      setShowCompleted(true)
  }


  
  return (
    <>
      <ol>
        {todos.map((todo) => (<li><input key={todo} onClick={() => boxClick(todo)} type="checkbox" />{todo}</li>))}
      </ol> 
     { showCompleted ? <ol>{completed.map((completed) => (<li>{completed}</li>))}</ol> : <ol></ol>}
      <input type="text" value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} />
      <button type="submit" onClick={handleAdd}>Add</button>
      <button type="submit" onClick={handleDelete}>Delete</button>
      <button type="submit" onClick={handleClear}>ClearAll</button>
      <br />
      <button onClick={handleCompleted}>{showCompleted ? "HideCompleted":"ShowCompleted"}</button>
      
      

    </>
  )
}
export default App
