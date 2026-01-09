import React, { useEffect, useState } from 'react'

const Effect_1 = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Siva');

  const changeName =()=>{
    setName('Sivaji');
  }

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1)
    },1000)
},[name])

  return (
    <>
      <h1>Rendered {count} times!</h1>
      <p>Hellooo {name}!</p>
      <button onClick={changeName}>Change name</button>
    </>
  )
}

export default Effect_1
