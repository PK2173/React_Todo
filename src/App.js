import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import Todos from './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
// import About from './MyComponent/About';
// import {
// BrowserRouter as Router,
// Switch,
// Route
// } from "react-router-dom";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = []
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('I am on onDelete', todo);
    settodos(todos.filter((e) => {
      return e !== todo;
    }));
    // let know = todos.indexOf(todo);
    // todo.splice(know , 1);
  }

  const addTodo = (title, desc) => {
    let sno = (todos.length) + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, myTodo]);
    // if(localStorage.getItem("todos") === null){
    // localStorage.setItem("todos",JSON.stringify(todos))
    // }
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header title="MyTodoList" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default App;
