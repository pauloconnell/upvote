import React, { useState,  useContext } from 'react'; 
import Upvote from '../Upvote/Upvote.js';
import './List.css';

import { VoteContext } from '../VoteProvider'

function List() {


        const [listSelected, setListSelected] = useState([false, false, false]);
        const [voteTracker, setVoteTracker] = useContext(VoteContext);
      
        const selectList = (index) => {
            if(listSelected[index] == true){
                return;
            }
            const newList = listSelected.map((item, i) => (i == index ? true : false))
            setListSelected(newList);
            console.log(index, "now votes are: ", voteTracker[index]);
          
        };

        const resetVotes = () =>{
            setVoteTracker([0, 0, 0]);
        }
        

  
    return(
        
        <div className="container">
            First: {voteTracker[0]} Second: {voteTracker[1]} Third: {voteTracker[2]}
            <button class="btn-primary" onClick={resetVotes} >Reset Votes</button>
            <div className="main-container">
                <div className="list-container" onClick={() => selectList(0)}>
             
                    <div>   <Upvote selected={listSelected[0]} index="0" /> </div>
                </div>

                <div className="list-container" onClick={() => selectList(1)}>
             
                    <div>   <Upvote selected={listSelected[1]} index="1" /> </div>
                </div>

                <div className="list-container" onClick={() => selectList(2)}>
             
                    <div>   <Upvote selected={listSelected[2]} index="2" /> </div>
                </div>
            </div>
            
        </div>


        
    );
  
}

export default List; 