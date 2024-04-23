import React, {createContext } from 'react'

export const contextOne = createContext();

const ContextOne = ({children}) => {
  return (
    <contextOne.Provider value={{}}>
        {children}
    </contextOne.Provider>
  )
}

export default ContextOne
