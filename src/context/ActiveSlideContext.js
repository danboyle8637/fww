import React, { createContext, useReducer, useContext } from "react";

const ActiveCardContext = createContext();

const ActiveCardStore = ({ children, initialState, reducer }) => {
  return (
    <ActiveCardContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ActiveCardContext.Provider>
  );
};

const useActiveCardContext = () => useContext(ActiveCardContext);

export { ActiveCardContext, ActiveCardStore, useActiveCardContext };
