import React, { createContext, useReducer, useContext } from "react";

const FAQContext = createContext();

const FAQStore = ({ children, initialState, reducer }) => {
  return (
    <FAQContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </FAQContext.Provider>
  );
};

const useFAQContext = () => useContext(FAQContext);

export { FAQContext, FAQStore, useFAQContext };
