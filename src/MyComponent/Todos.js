import React from 'react'
import TodoItems from './TodoItem'

const Todos = (props) => {
  let st = {
    'padding-bottom' : "15vh"
  }
  return (
    <div className='container' style={st}>
      <h3 className='my-3'>Todo List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo)=>{
        return (<>
        <h3>This one</h3>
        <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        <hr/>
        </>)
      })}
    </div>
  )
}

export default Todos
