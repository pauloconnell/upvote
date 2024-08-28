import React, { useState, useContext } from 'react'; 
import ArrowUpload from '../../icons/arrow-up.svg';
import Plus from '../../icons/plus.svg';
import './Upvote.css';
import { VoteContext } from '../VoteProvider'


function Upvote(props) {

        const [voteTracker, setVoteTracker] = useContext(VoteContext);
       // const [count, setCount] = useState(0);
       
        //const votes = useContext(MyContext)
        const handleUpvote = () => {
          if(props.selected){
            //setCount(count + 1);
            console.log("add vote to ", voteTracker[props.index], props.index)
            let newVotes =  voteTracker.map((item, i) => (i == props.index ? item + 1 : item))
            setVoteTracker(newVotes);
            console.log("added ", voteTracker[props.index], props.index)
          }
          
        };

        const renderVotes = () => {                 // return images to match number of upvotes
            let jsx = [];
            for(let x = 0; x < voteTracker[props.index]; x++){
                jsx.push(<img src={ArrowUpload} key = {x} alt="ArrowUp Icon" /> ); 
            }
            return jsx;
        }

     
  
    return(
      <div>
        <div className={`upvote-container ${props.selected? 'selected' : '' }`} >
          <div>
                   {renderVotes()}  
          </div>
          <div onClick={handleUpvote} className="upvote-icon" ><img src={Plus} alt="Plus Icon"  /> </div>
        </div>
      </div>
    );
  
}

export default Upvote; 