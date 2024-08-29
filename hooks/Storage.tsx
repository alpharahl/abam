import React, {createContext, useContext, useState} from "react";

// @ts-ignore
const StorageContext = createContext();

export const StorageProvider = ({children}: any) => {
  const [account, setAccount] = useState<string>();

  return (
    <StorageContext.Provider value={{account}}>
      {children}
    </StorageContext.Provider>
  )
}

export const useStorage = () => {
  return useContext(StorageContext);
}