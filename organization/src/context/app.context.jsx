import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
