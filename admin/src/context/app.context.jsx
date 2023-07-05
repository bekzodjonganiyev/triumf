import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export let usersActions = null;
const AppContextProvider = ({ children }) => {
  const [scrolValue, setScrolValue] = useState();
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [necceseryIds, setNecceseryIds] = useState([]);

  return (
    <AppContext.Provider
      value={{ scrolValue, setScrolValue, selectedLetters, setSelectedLetters, necceseryIds, setNecceseryIds }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
