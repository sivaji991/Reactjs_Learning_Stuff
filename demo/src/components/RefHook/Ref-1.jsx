/* eslint-disable react-hooks/refs */
import React, { useEffect, useRef, useState } from 'react'

const Ref_1 = () => {
  const [value,setValue] = useState(0);
  // const [count,setCount] = useState(0);
  const count =  useRef(0);
  // console.log(count);
  
  useEffect(()=>{
    count.current = count.current + 1;
  });

  const decreaseBy1=()=>{
    setValue(value - 1)
  }
  const increaseBy1=()=>{
    setValue(value + 1)
  }
  

  
  return (
    <>
      <button onClick={decreaseBy1}>-1</button>
        <h1>{value}</h1>
      <button onClick={increaseBy1}>+1</button>
      <h1>Render Count : {count.current}</h1>
    </>
  )
}

export default Ref_1
