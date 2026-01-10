import useLocalStorage from "./LocalStorage-02"

const CustomHook = () => {

  const[name, setName] = useLocalStorage('username', '')
  const[id, setId] = useLocalStorage('userid', '')
  
  return (
    <>
      <input 
        type="text" 
        placeholder='Enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
      <input 
        type="text" 
        placeholder='Enter id'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>Id: {id}</h2>

    </>
  )
}

export default CustomHook
