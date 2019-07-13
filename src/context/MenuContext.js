import React, { createContext, useContext, useReducer } from "react";

const MenuContext = createContext();

const MenuStore = ({ children, initialState, reducer }) => {
  return (
    <MenuContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => useContext(MenuContext);

export { MenuStore, MenuContext, useMenuContext };
