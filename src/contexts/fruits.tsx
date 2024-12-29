/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, createContext, useContext } from "react";

// type alias
export type FruitsContextType = {
  fruits: string[];
  addFruit: (fruit: string) => void;
  removeFruit: (fruit: string) => void;
  updateFruit: (fruit: string) => void;
  getFruit: (fruit: string) => string | undefined;
};

// context
export const FruitsContext = createContext<FruitsContextType>({
  fruits: [],
  addFruit: (_fruit: string) => {},
  removeFruit: (_fruit: string) => {},
  updateFruit: (_fruit: string) => {},
  getFruit: (_fruit: string) => undefined,
});

export type FruitsContextProviderProps = {
  children: React.ReactNode;
};

// provider
export function FruitsContextProvider({children} : FruitsContextProviderProps) {
  const [fruits, setFruits] = useState<string[]>([]);
  
  const addFruit = (fruit: string) => {
    setFruits([...fruits, fruit]);
  };
  
  const removeFruit = (fruit: string) => {
    setFruits(fruits.filter((f)=> f !== fruit));
  };
  
  const updateFruit = (fruit: string ) => {
    setFruits(fruits.map((f)=> (f === fruit ? fruit : f)));
  };
  
  const getFruit = (fruit: string) => {
    return fruits.find((f) => f === fruit);
  };
  
  const contextValue: FruitsContextType = {
    fruits,
    addFruit,
    removeFruit,
    updateFruit,
    getFruit,
  }
  
  return (
    <FruitsContext.Provider value={contextValue}>
      {children}
    </FruitsContext.Provider>
  );
}

export function useFruitsContext() {
    return useContext(FruitsContext);
};