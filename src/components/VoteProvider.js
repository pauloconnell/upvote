import React, { createContext, useState, useEffect } from 'react';


const VoteContext = createContext([]);

const VoteProvider = ({ children }) => {
  const [voteTracker, setVoteTracker] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : [0, 0, 0];
  });

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(voteTracker));
  }, [voteTracker]);

  return (
    <VoteContext.Provider value={[voteTracker, setVoteTracker]}>
      {children}
    </VoteContext.Provider>
  );
};

export { VoteProvider, VoteContext };