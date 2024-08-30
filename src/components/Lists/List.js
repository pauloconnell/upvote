import React, { useState,  useContext } from 'react'; 
import Upvote from '../Upvote/Upvote.js';
import './List.css';

import { VoteContext } from '../VoteProvider'

function List() {


        const [listSelected, setListSelected] = useState([false, false, false]);
        const [voteTracker, setVoteTracker] = useContext(VoteContext);                      // use Context Provider for global state
      
        const selectList = (index) => {
            if(listSelected[index] === true){                                               
                return;
            }
            const newList = listSelected.map((item, i) => (i === index ? true : false))     // set current component selected state to 'true' others to 'false' - allows only 1 to be selected at a time
            setListSelected(newList);
           
          
        };

        const resetVotes = () =>{
            setVoteTracker([0, 0, 0]);
            setListSelected([false, false, false]);
        }
        

  
    return(
        
        <div>
            First: {voteTracker[0]} Second: {voteTracker[1]} Third: {voteTracker[2]}
            <button className="btn-primary" onClick={resetVotes} >Reset Votes</button>
            <div className="main-container">

                <div  onClick={() => selectList(0)}>
                   <Upvote selected={listSelected[0]} index="0" />
                </div>

                <div  onClick={() => selectList(1)}>
                   <Upvote selected={listSelected[1]} index="1" />
                </div>

                <div  onClick={() => selectList(2)}>
                    <Upvote selected={listSelected[2]} index="2" />
                </div>
            </div>
            
        </div>


        
    );
  
}

export default List; 