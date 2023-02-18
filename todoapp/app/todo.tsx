// "use client";

// import { useState } from "react";

// export default function Todo() {
//   const [todo, setTodo] = useState("");
//   // const [editingTodo, setEditingTodo] = useState("")
//   const [todos, setTodos] = useState([
//     { todoText: String ("Sign In"), completed: Boolean (false) },
//     { todoText: String("Register"), completed: Boolean (false) },
//     { todoText: String("CheckWordsLength"), completed: Boolean (true) },
//     { todoText: String("check CounterApp"), completed: Boolean (false) },
//     { todoText: String("check CounterAppAdvance"), completed: Boolean (true) },
//   ]);
//   const onClickHandler = (myElm: any) => {
//     console.log("My elm", myElm);

//     // map runs on array and return an array
//     const newTodos = todos.map((todo) => {
//       if (todo.todoText == myElm.todoText) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     console.log(newTodos);

//     setTodos(newTodos);
//   };
//   const addTodo = () => {
//     const newTodo = { todoText: todo, completed: false };
//     // const newTodos = { ...todos, newTodo };
//     const newTodos = [...todos, newTodo]
//     setTodos(newTodos);
//     setTodo("");
//   };
//   // const editTodo = (todoText: string) => {
//   //   setEditingTodo(todoText);
//   // };
//   // const updateTodo = () => {
//   //   const newTodos = todos.map((todo) => {
//   //     if (todo.todoText === editingTodo) {
//   //          todo.todoText = todo;
//   //     }
//   //     return todo;
//   //   })
//   //   setTodos(newTodos);
//   //   setEditingTodo("");
//   // }
//   const deleteTodo = (myTodo:any)=>{
//     const newTodos = todos.filter((todo)=>{
//       if(todo.todoText == myTodo.todoText) return false;
//       return true;
//     });
//     console.log("old todos", todos, "new todos", newTodos);
//     setTodos(newTodos)
//     // const deleteTodo = (meraTodo: any) => {
//     //   const newTodos = todos.filter((todo) => {
//     //     if (todo.todoText == meraTodo.todoText) return false;
//     //     return true;
//     //   });
//     //   console.log("old todos", todos, "new todos", newTodos);
//     //   setTodos(newTodos);
//   }
//   // const editTodo = () => {
//   //   const newTodos = todos.toString((todo)=>{
//   //     return
//   //   })
//   // }
//   return (
//     <>
//       <div>
//         <h1>Todos</h1>
//       </div>
//       <input
//         placeholder="add todo tex"
//         value={todo}
//         onChange={(e) => {
//           setTodo(e.target.value);
//         }}
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {/* <li>Sign In</li>
//         <li>Register</li>
//         <li>CheckWordsLength</li>
//         <li>check CounterApp</li>
//         <li>check CounterAppAdvance</li> */}
//         {/* <li>{todos[0]}</li>
//         <li>{todos[1]}</li>
//         <li>{todos[2]}</li>
//         <li>{todos[3]}</li>
//         <li>{todos[4]}</li> */}
//         {todos.map((elm) => {
//           return (
//             <li
//               style={{
//                 color: elm.completed ? "green" : "orange",
//                 fontStyle: "oblique",
//                 listStyle: "none",
//               }}
//               key={elm.todoText}
//             >
//               <input
//                 type="checkbox"
//                 checked={elm.completed}
//                 onChange={() => {
//                   onClickHandler(elm);
//                 }}
//               />
//               {elm.todoText}
//               {/* <button onClick={()=>{updateTodo(elm)}}>Edit</button> */}
//               <button onClick={()=>{deleteTodo(elm)}}
//               /*style={{backgroundColor: "red", margin: "10", 
//                display: "inline-block"}}*/
//                >
//                 {" "}
//                 Delete</button>
//                 {/* <button onClick={()=>{
//                   editTodo(elm)
//                 }}
//                 // style={{backgroundColor: "darkcyan"}}
//                  >
//                   {" "}
//                   Edit Todo</button> */}
//                   {/* <input
//             placeholder="edit todo text"
//             value={todo}
//             onChange={(e) => {
//               setTodo(e.target.value);
//             }}
//           />
//           <button onClick={updateTodo}>Update</button> */}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Breakfast", completed: false },
    { todoText: "Lunch", completed: false },
    { todoText: "Super", completed: true },
    { todoText: "Dinner", completed: false },
    { todoText: "Candle light dinner", completed: true },
  ]);

  const onClickHandler = (myElm: any) => {
    const newTodos = todos.map((todo) => {
      if (todo.todoText === myElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (myTodo:any)=>{
    const newTodos = todos.filter((todo)=>{
      if(todo.todoText === myTodo.todoText) return false;
      return true;
    });
    setTodos(newTodos)
  };

  return (
    <div 

    className="container mx-auto mt-10" 
    // className="container mx-auto mt-10" 
    >
      <h1 className="text-6xl font-bold text-blue-700 px-4 text-center ">Add Todos Here</h1>
      <div className="flex mb-4 pt-10" >
        <input 
          className="border rounded-l px-3 py-2 w-full border-purple-600 "
          placeholder="add todo text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((elm) => {
          return (
            <li
              className={`py-2 ${elm.completed ? "text-green-500 line-through" : "text-orange-500"}`}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-4 rounded" onClick={()=>{deleteTodo(elm)}}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

