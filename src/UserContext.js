import React, { createContext, useState } from 'react';

// Create Context
export const UserContext = createContext();

// Create Provider component
export const UserProvider = ({ children }) => {
  const [userProfile] = useState({
    name: 'Hussaina Abdullahi Rais',
    age: 24
  });

  return (
    <UserContext.Provider value={userProfile}>
      {children}
    </UserContext.Provider>
  );
};
