import { useState } from 'react'
import './App.css'
import InputContainer from "./components/InputContainer";
import TodoContainer from './components/TodoContainer';

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e){
    setInputVal(e.target.value);
  }
  
  function addTodo(){
    if(inputVal !== ""){
      setTodos((previous)=> [...previous, inputVal]);
      setInputVal(" ");
    }
  }


  function deleteTodo(i){
    setTodos((previousTodos)=>{
       return previousTodos.filter((todos, index)=>{
        return index !== i
       });  
    });
  }
  
  return (
    <>
     <main>
       <h1>To Do List</h1>
       <InputContainer input={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
       <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
     </main>

    </>
  )
}

export default App
