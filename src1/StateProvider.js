// Setup data layer 
// We need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';
// Pretares the dataLayer
export const StateContext = createContext();

// wrap our app and provid the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull information from the data layer
// This is how we use it  inside of a component
export const useStateValue = () => useContext(StateContext);