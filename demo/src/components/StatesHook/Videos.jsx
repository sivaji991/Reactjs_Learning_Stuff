function MyChannel(){
  let myVideos = ['one','two','three']
  return(
    <>
      {myVideos.map((video, index)=>{
        return <li key={index}>{video} - {index}</li>
      })}
    </>
  )
}

export default MyChannel;
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
*/