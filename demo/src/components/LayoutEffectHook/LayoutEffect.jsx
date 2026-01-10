import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {

  useEffect(()=>{
    console.log('message from useEffect');
  },[])
  useLayoutEffect(()=>{
    console.log('message from useLayoutEffect');
  },[])

  return (
    <>
      <h2>Test msg</h2>
      {Array(100).fill('').map((item,index)=>(
        // eslint-disable-next-line react-hooks/purity
        <li key={index}>{Math.pow(Math.random(), 10)}</li>))}
    </>
  )
}

export default LayoutEffect;

// useEffect renderes after the UI elements
//useLayoutEffect renderes before the UI element
