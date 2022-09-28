import {useState, createContext, useContext} from "react";

export const NavigationContext = createContext(null);

export const LinkContextProvider = ({ children }) => {


  const [currentLink, setCurrentLink] = useState()

  function handleClick(value) {
    setCurrentLink(value)
  }

  const value = {
    currentLink,
    handleClick
  }
  return (
      <NavigationContext.Provider value={value}>
        {children}
      </NavigationContext.Provider>
  );
};

