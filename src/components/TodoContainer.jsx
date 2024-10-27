import React from "react";
import Todo from "./Todo";


function TodoContainer({todos, deleteTodo}){

    return(
        <div className='container'>
         {todos.map((todo, index)=>(
            console.log("Index inside todocontainer:--", todo,index),
             <Todo index={index} todo={todo} deleteTodo={deleteTodo}/>
         ))}
       </div>
    )
}

export default TodoContainer;