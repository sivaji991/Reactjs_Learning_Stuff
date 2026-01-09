import { useCallback, useState } from 'react'
import Header from './Header';

const Callback_1 = () => {

  const [counter, setCounter] = useState(0);

  const newFun = useCallback(()=>{}, []);

  //We use the useCallback hook to store the function in cache memory , to prevent the re-rendering of the particular component.

  return (
    <>
      <Header newFun={newFun} />
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(prev => prev + 1)
      }}>Click</button>
    </>
  )
}

export default Callback_1;
