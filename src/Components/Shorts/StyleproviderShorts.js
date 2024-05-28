import React, { createContext, useState } from 'react';

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    Fabricindex: 2,
    CollarStyle: [true,false,false,false,false,false,false],
    
    // Add more variables as needed
  });

  const updateSharedState = (updates) => {
    setSharedState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  return (
    <StyleContext.Provider value={{ sharedState, setSharedState: updateSharedState }}>
      {children}
    </StyleContext.Provider>
  );
};

export { StyleContext, StyleProvider };
