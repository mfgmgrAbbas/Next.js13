"use client";

import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  // const [editingTodo, setEditingTodo] = useState("")
  const [todos, setTodos] = useState([
    { todoText: String ("Sign In"), completed: Boolean (false) },
    { todoText: String("Register"), completed: Boolean (false) },
    { todoText: String("CheckWordsLength"), completed: Boolean (true) },
    { todoText: String("check CounterApp"), completed: Boolean (false) },
    { todoText: String("check CounterAppAdvance"), completed: Boolean (true) },
  ]);
  const onClickHandler = (myElm: any) => {
    console.log("My elm", myElm);

    // map runs on array and return an array
    const newTodos = todos.map((todo) => {
      if (todo.todoText == myElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodos);

    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    // const newTodos = { ...todos, newTodo };
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
    setTodo("");
  };
  // const editTodo = (todoText: string) => {
  //   setEditingTodo(todoText);
  // };
  // const updateTodo = () => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.todoText === editingTodo) {
  //          todo.todoText = todo;
  //     }
  //     return todo;
  //   })
  //   setTodos(newTodos);
  //   setEditingTodo("");
  // }
  const deleteTodo = (myTodo:any)=>{
    const newTodos = todos.filter((todo)=>{
      if(todo.todoText == myTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos)
    // const deleteTodo = (meraTodo: any) => {
    //   const newTodos = todos.filter((todo) => {
    //     if (todo.todoText == meraTodo.todoText) return false;
    //     return true;
    //   });
    //   console.log("old todos", todos, "new todos", newTodos);
    //   setTodos(newTodos);
  }
  // const editTodo = () => {
  //   const newTodos = todos.toString((todo)=>{
  //     return
  //   })
  // }
  return (
    <>
      <div>
        <h1>Todos</h1>
      </div>
      <input
        placeholder="add todo tex"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {/* <li>Sign In</li>
        <li>Register</li>
        <li>CheckWordsLength</li>
        <li>check CounterApp</li>
        <li>check CounterAppAdvance</li> */}
        {/* <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
        <li>{todos[3]}</li>
        <li>{todos[4]}</li> */}
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "orange",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              {/* <button onClick={()=>{updateTodo(elm)}}>Edit</button> */}
              <button onClick={()=>{deleteTodo(elm)}}
              /*style={{backgroundColor: "red", margin: "10", 
               display: "inline-block"}}*/
               >
                {" "}
                Delete</button>
                {/* <button onClick={()=>{
                  editTodo(elm)
                }}
                // style={{backgroundColor: "darkcyan"}}
                 >
                  {" "}
                  Edit Todo</button> */}
                  {/* <input
            placeholder="edit todo text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button onClick={updateTodo}>Update</button> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
