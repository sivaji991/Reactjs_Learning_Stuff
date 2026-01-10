/* import React, { useState } from 'react'

const Reducer = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev + 1)}>Increase</button>
      <button onClick={()=>setCount(prev=>prev - 1)}>Decrease</button>
    </>
  )
}

export default Reducer
*/
//The above code functionality is based on the useState hook , now in the following code we use useReducer hook


import React, { useReducer } from 'react'

const Reducer = () => {

  const initialState = {count: 0}

  const reducer = (state, action) =>{
    switch(action.type){
      case 'increase' : {
        return {count: state.count + 1}
      }
      case 'decrease' : {
        return {count: state.count - 1}
      }
      case 'input' : {
        return {count: action.payload}
      }
      default :{
        return state
      }
    }
    
  }

  // useReducer(reducer, state) ;   
  const [state, dispatch] = useReducer(reducer, initialState) ;   


  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
        <button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>
        <br />
        <input 
        value={state.count}
        onChange={(e)=>dispatch({type:'input', payload:Number(e.target.value)})} type="number" />
    </div>
  )
}

export default Reducer
