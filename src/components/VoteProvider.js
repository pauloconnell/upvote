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

  useEffect(() => {                                                  // useEffect hook updates the local storage when the state (voteTracker) changes. 
    localStorage.setItem('myData', JSON.stringify(voteTracker));
  }, [voteTracker]);


                                                                    
  console.log(voteTracker);
  return (                                                          // this is the boilerplate for the context provider.
    <VoteContext.Provider value={[voteTracker, setVoteTracker]}>    
      {children}
    </VoteContext.Provider>
  );
};

export { VoteProvider, VoteContext };