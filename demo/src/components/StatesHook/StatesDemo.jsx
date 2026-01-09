import { useState, useEffect } from 'react'

function StatesDemo({message}){
  const [elements] = useState('Element-1');
  const [like, setLike] = useState(0);

  const [product, setProduct] = useState('');

  useEffect(() => {
    console.log('heuiubv')
  },[like]);
  useEffect(() => {
    console.log('jjjjj')
  },[]);

  function toggleBtn(){
    setLike(like + 1)
  }
  

  return (
    <>
      <h1>States Demos</h1>
      <p>Elements : {elements}</p>
      <p>Likes: {like}</p>
      <button onClick={toggleBtn}>Like</button>
      <button onClick={()=>{
        setLike(like - 1)
      }}>DisLike</button>

      {
        like >=4 && (
        <p>welcome</p>
      )}
      {
        like <4?
          <p>Go Away</p>:
          <p>Welcomw again</p>
      }

      <p>----------------</p>

      <form action="">
        <label htmlFor="product">Product Details</label>
        <input type="text" name="product" value={product} onChange={(event)=>{
          console.log(event)
          setProduct(event.target.value)
          console.log(event.target.value)
        }}/>
      </form>
      
      <ChildComponent message={message}/>
    </>
  )
}

function ChildComponent({message}){
  return(
    <>
      <p>Child</p>
      {message}
    </>
  )
}

export default StatesDemo

/*
1. Notable React features:
  a. Storing Values that can change over time.  => State feature.
  b. Running one after component renders. => side effects feature
  c. Accessing DOM values => Refs feature

2. Hooks are special functions in react let you use state and other react features in functional components

3. Most used hooks in reactjs
  a. useState() - state feature
  b. useEffect() - side effects feature
  c. useRef() - refs feature

4. Hooks should always be called at the top of the component, not inside or conditions.

-----------

What is State in React?
1.  State is like a variable that lives inside a component and controls how the UI behaves.
2.  React components automatically re-renders when state changes.
3.  Use state when your data can change over time.
4.  Example: Instagram post's like button. The likes count of a particular post chages over time.

----------

What is Conditional Rendering?
  1.  It means showing different UI based on a condion (if/else)
  2.  In React ,you can use JavaScript if/else, ternary (?:) or logical AND(&&) to decide what to render.

-----------

What is useEffect in React?
  1.  useEffect() lets you run some code after the component renders.
  2.  It's used fo:
    a.  Fetching data from API's
    b.  Updating the DOM manually.
  3.  The first argument is  function.
  4.  The second argument (called the dependency array) controls when the effect runs.

---------

What is Prop Drilling?
  1.   Props are used to send data from one component to another (usually from parent to child).
  2.  Passing props through many layers of components, even when some of them don't need that prop directly is called prop drilling.
*/