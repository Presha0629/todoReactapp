import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [todos,setTodos]=useState([])
  const [inputVal,setInputVal]=useState("")
  const [completed,setCompleted]=useState([])
  const [showList, setShowList] = useState(false);

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
  }

  const boxClick =(item) => {
    if (!completed.includes(item)) {
      setCompleted((completed) => [...completed, item]);
    }
  }
  
  const handleCompleted =() => {
    setShowList(!showList);
  }
  
  return (
    <>
      <ol>
        {todos.map((todo) => (<li><input onClick={boxClick} type="checkbox" />{todo}</li>))}
      </ol>
      <ol>{completed.map((completed) => (<li><input type="text"  />{completed}</li>))}</ol>
      <input type="text" value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} />
      <button type="submit" onClick={handleAdd}>Add</button>
      <button type="submit" onClick={handleDelete}>Delete</button>
      <button type="submit" onClick={handleClear}>ClearAll</button>
      <br />
      <button type='submit' onClick={handleCompleted}> {showList ? 'Hide Completed' : 'Show Completed'}</button>
      

    </>
  )
}
export default App
