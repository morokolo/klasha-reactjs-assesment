import { useState, createContext } from "react";

export const NavigationContext = createContext(null);

export const LinkContextProvider = ({ children }) => {
  const [currentLink, setCurrentLink] = useState(1);

  function handleClick(value) {
    setCurrentLink(value);
  }

  const [currency, setCurrency] = useState("USD");

  function handleSetCurrency(value) {
    setCurrency(value);
  }

  const value = {
    currentLink,
    handleClick,
    currency,
    handleSetCurrency,
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
