import React, { createContext, useContext, useReducer } from "react";

const IsTweeningContext = createContext();

const IsTweeningStore = ({ children, initialState, reducer }) => {
  return (
    <IsTweeningContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </IsTweeningContext.Provider>
  );
};

const useIsTweeningContext = () => useContext(IsTweeningContext);

export { IsTweeningStore, IsTweeningContext, useIsTweeningContext };
