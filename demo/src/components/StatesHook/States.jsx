import React, { useState } from 'react'

const States = () => {
  const [car, setCar] = useState({
    brand:'Fortuner',
    model:'Roma',
    year:'2024',
    color:'Black'
  })
  // const [brand, setBrand] = useState('Ferrari')
  // const [model, setModel] = useState('Roma')
  // const [year, setYear] = useState('2023')
  // const [color, setColor] = useState('Red')

  const changeColor = ()=>{
    setCar((previous)=>{
      //In the place of 'previous' parameter will get the previous value and we can maje changes accordingly
      return {
        ...previous, color:'Red'
      }
    })
  }
  return (
    <>
      <div>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        <button onClick={changeColor}>Red</button>
      </div>
    </>
  )
}

export default States
