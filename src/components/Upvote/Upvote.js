import React, { Component, useState } from 'react'; 
import ArrowUpload from '../../icons/arrow-up.svg';
import Plus from '../../icons/plus.svg';
import './Upvote.css';

function Upvote() {

    
        const [count, setCount] = useState(0);
      
        const handleUpvote = () => {
          setCount(count + 1);
        };

        const renderVotes = () => {                 // return images to match number of upvotes
            let jsx = [];
            for(let x = 0; x < count; x++){
                jsx.push(<img src={ArrowUpload} key = {x} alt="Arrow Upload Icon" /> ); 
            }
            return jsx;
        }
  
    return(
      <div><h2> Upvote component will go here</h2>
        <div class="upvote-container">
          Name to be Upvoted            {renderVotes()}  <img src={ArrowUpload} alt="Arrow Upload Icon" />
          
          <div onClick={handleUpvote} class="upvote-icon" ><img src={Plus} alt="Plus Icon"  /> </div>
        </div>
      </div>
    );
  
}

export default Upvote; 