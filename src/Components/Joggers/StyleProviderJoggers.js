import React, { createContext, useState } from 'react';

const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    Fabricindex: 0,
    BackPocketStyle: [true,false,false,false,false,false,false],
    TicketPocketStyle:[true,false],
    BottomStyle:[true,false,false,false,false,false],
    Change_Model_Index:0,
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
