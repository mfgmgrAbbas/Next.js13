// import { useState } from "react"

// export default function (){
//     const [counter, setCounter] = useState(0)
//     const decrement = (value = 1) =>{
//         setCounter(counter-value)

//     } 
//     const increment = (kitna= 1) => {
//         setCounter(counter+kitna)
//     }
   
//     return <>

//     <button onClick={()=>decrement(1)}>Decrement</button>
//     <button onClick={()=>decrement(2)} >Decrement by 2</button>
//     <button onClick={()=>decrement(5)} >Decrement by 5</button>
//     {counter}
//     <button onClick={()=>increment(1)}>Increment</button>
//     <button onClick={()=>increment(2)} >Increment by 2</button>
//     <button onClick={()=>increment(5)} >Increment by 5</button>

//     </>
// }
import React, { useState } from "react";

const CounterAppAdvance = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (value: number) => {
    setCounter(counter + value);
  };

  return (
    <>
      <button onClick={() => updateCounter(-1)}>Decrement by 1</button>
      <button onClick={() => updateCounter(-2)}>Decrement by 2</button>
      <button onClick={() => updateCounter(-5)}> Decrement by 5</button>
      {counter}
      <button onClick={() => updateCounter(1)}> Increment by 1</button>
      <button onClick={() => updateCounter(2)}> Increment by 2</button>
      <button onClick={() => updateCounter(5)}> Increment by 5</button>
    </>
  );
};

export default CounterAppAdvance;
