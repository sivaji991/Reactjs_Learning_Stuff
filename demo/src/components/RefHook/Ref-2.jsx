import React, { useRef } from 'react'

const Ref_2 = () => {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = 'red';
  }
  return (
    <>
      <input type="text" ref={inputElement}/>

      <button onClick={btnClicked}>Click</button>
    </>
  )
}

export default Ref_2
