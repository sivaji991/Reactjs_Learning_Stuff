import AppContext from "./AppContext";

const ContextProvider = (props) => {
  const phone = "+91 1234567891";
  const name = "Something"
  return (
    <AppContext.Provider value={{phone, name}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;