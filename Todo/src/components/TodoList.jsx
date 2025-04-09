import React, { useState } from 'react'

function TodoList({setTodos,todos,input}) {
    
  

    const removeTask = id => setTodos(task => task.filter(t => t.id != id))


  return (
    <>
        {todos.map(({text, id}) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTask(id)}>X</button>
          </li>
        ))}
    </>
  )
}

export default TodoList