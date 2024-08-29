import React, { createContext, useState, useEffect } from 'react';


const VoteContext = createContext([]);

const VoteProvider = ({ children }) => {
  const [voteTracker, setVoteTracker] = useState(() => {
    try{
        const savedData = localStorage.getItem('myData');              
        return savedData ? JSON.parse(savedData) : [0, 0, 0];
    } catch (error) {
        console.error("error parsing data from localStorage:", error);
        return [0, 0, 0];
    }
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