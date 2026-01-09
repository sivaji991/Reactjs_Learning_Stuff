import React, { useState } from 'react'

const StatesTwo = () => {
  const [count,setCount] = useState(0);

  const increaseCount = ()=>{
    // setCount(count + 1);

    setCount((previous)=>{
      previous + 1
    })

  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increases</button>
    </>
  )
}

export default StatesTwo
