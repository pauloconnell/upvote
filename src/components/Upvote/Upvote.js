import React, { useContext } from 'react'; 
import Plus from '../../icons/plus.svg';
import './Upvote.css';
import { VoteContext } from '../VoteProvider'


function Upvote(props) {

        const [voteTracker, setVoteTracker] = useContext(VoteContext);
        
        const handleUpvote = () => {
                                                    // only allow votes to be toggled after component has been selected - controlled by parent through props
          if(props.selected){
            let newVotes =  voteTracker.map((item, i) => (i === Number(props.index) ? item + 1 : item))
            setVoteTracker(newVotes);
          }
          
        };

        const renderVotes = () => {                 // return images to match number of upvotes
            let jsx = [];
            for(let x = 0; x < voteTracker[props.index]; x++){
                jsx.push(
                <div className='img-container' key={`${props.index}${x}`}>
                  

                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="arrow-up"  d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z" fill="#343A40"/>
                  </svg>

                </div>); 
            }
            return jsx;
        }

     
  
    return(
      <div>
        <div className={`upvote-container ${props.selected? 'selected' : '' }`} data-testid={props.index} >
          <div>
                   {renderVotes()}  
          </div>
          <div onClick={handleUpvote} className="upvote-icon"  >
            <div className='img-container'>
              <img src={Plus} alt="Plus Icon"  /> 
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Upvote; 