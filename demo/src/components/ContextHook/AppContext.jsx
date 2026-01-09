/*
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 1234567891"
  return (
    <AppContext.Provider value={phone}>
      {
        props.children
      }
    </AppContext.Provider>
  )
}

export default ContextProvider;
*/

import { createContext } from "react";

const AppContext = createContext();

export default AppContext;