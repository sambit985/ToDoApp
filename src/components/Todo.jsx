import React from "react";

export default function Todo({todo, index, deleteTodo}){

    return(
        <div className='todo'>
        <p>{todo}</p>
        <div className='action'>
        <input type="checkbox" />
        <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
       </div>
    )
}