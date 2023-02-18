
"use client"

import { useEffect, useRef, useState } from "react"
import CheckWordsLength from "./check-words-length";
import CounterApp from "./counter-app";
import CounterAppAdvance from "./counter-app-advance";
import Todo from "./todo";




export default function Home() {
  // const val = "Hello"
  // const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  // const [val3, setVal3] = useState<string>()
  // const [val2, setVal2] = useState("Hello world2")
  // const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setVal3(event.target.value);
  // };
  // useEffect(()=> {if (textareaRef && textareaRef.current) {
  //   textareaRef.current.style.height = "0px";
  //   const scrollHeight = textareaRef.current.scrollHeight;
  //   textareaRef.current.style.height = scrollHeight + "px"}}, [val3]);
  // const onChangeHandler2 = (e:any)=>{
  //   console.log("e is", e.target.value)
  //   setVal2(e.target.value)
  // }
  // const [val, setVal] = useState("Hello World!")
  // const onChangeHandler = (e: any)=> {
  //   console.log ("e is", e.target.value)
  //   setVal(e.target.value)

  
  return (
  <> 
  
  {/* <input type= "text" placeholder='Hello World'  />  place holder are used to
  show value in shaded */}
   {/* <input type="text" value= {val} onClick={onChangeHandler} />   */}
   {/* <input type={"text"} value = {val} onChange = {onChangeHandler} />
   <br />
   <input type= "text" value={val2} onChange = {onChangeHandler2} />
   <br />
   Length of first string: {val.length}
   <br />
   Length of second string: {val2.length}  */}
    
 
   <div>
   
   {/* <textarea
        ref={textareaRef}
        style={styles.textareaDefaultStyle}
        onChange={textAreaChange}
      ></textarea> */}
    <br />
    {/* <input type="text" value={val} onChange = {onChangeHandler} /> */}
   
    <br />
    {/* <input type="text" value={val2} onChange ={onChangeHandler2} /> */}
    <br />
    {/* Length of words in text with spaces: {val.length} */}
    <br />
    {/* Length of words in textarea with spaces: {val3?.length} */}
    <br />
    {/* Length of words in textarea without spaces: {val3?.replace(/\s/g, "").length} */}
    <br />
    {/* Length of words in text without spaces: {val.replace(/\s/g, "").length} */}
    <br />
    {/* Length of scond string: {val2.length} */}
    <br />
    {/* <Todo /> */}
    <Todo />
    <br />
    <h1>Count unlimited Words with spaces or without spaces</h1>
    <h2>Write or paste text in textarea</h2>
    <br />
    {/* <CheckWordsLength /> */}
    <br />
    <h1>Counter App</h1>
    <br />
    {/* <CounterApp /> */}
    <br />
    {/* <h1>Counter App Advance</h1> */}
    <br />
    {/* <CounterAppAdvance /> */}
   </div>
  </>)
}
const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textareaDefaultStyle: {
    padding: 5,
    width: 400,
    display: "block",
    resize: "none",
    backgroundColor: "#eee",
  },
};
// "use client"
// import { useState } from 'react';

// type Todo = {
//   id: number;
//   title: string;
//   isComplete: boolean;
// };

// const useTodo = (): [Todo[], (todo: Todo) => void, (id: number) => void] => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodo = (todo: Todo) => {
//     setTodos([...todos, todo]);
//   };

//   const removeTodo = (id: number) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return [todos, addTodo, removeTodo];
// };

// export default useTodo;