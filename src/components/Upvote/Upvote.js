import React, { useContext } from 'react'; 
import ArrowUpload from '../../icons/arrow-up.svg';
import Plus from '../../icons/plus.svg';
import './Upvote.css';
import { VoteContext } from '../VoteProvider'


function Upvote(props) {

        const [voteTracker, setVoteTracker] = useContext(VoteContext);
       
       
        
        const handleUpvote = () => {
                                                    // only allow votes to be toggled after component has been selected
          if(props.selected){
            let newVotes =  voteTracker.map((item, i) => (i === Number(props.index) ? item + 1 : item))
            setVoteTracker(newVotes);
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
        <div className={`upvote-container ${props.selected? 'selected' : '' }`} data-testid={props.index} >
          <div>
                   {renderVotes()}  
          </div>
          <div onClick={handleUpvote} className="upvote-icon"  ><img src={Plus} alt="Plus Icon"  /> </div>
        </div>
      </div>
    );
  
}

export default Upvote; 