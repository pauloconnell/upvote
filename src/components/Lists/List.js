import React, { useState } from 'react'; 
import Upvote from '../Upvote/Upvote.js';
import './List.css';

function List() {

    
        const [list, setList] = useState([]);
      
        const handleAdd2List = () => {
          setList.push(<Upvote />);
        };

        // const renderVotes = () => {                 // return images to match number of upvotes
        //     let jsx = [];
        //     for(let x = 0; x < count; x++){
        //         jsx.push(<img src={ArrowUpload} key = {x} alt="Arrow Upload Icon" /> ); 
        //     }
        //     return jsx;
        // }
  
    return(
        <div><h2> Please vote on any of these names:</h2>
            <div class="main-container">
                <div class="list-container">
                    <div> Name1</div>
                    <div>   <Upvote /> </div>
                </div>

                <div class="list-container">
                    <div> Name2</div>
                    <div>   <Upvote /> </div>
                </div>

                <div class="list-container">
                    <div> Name3</div>
                    <div>   <Upvote /> </div>
                </div>
            </div>
        </div>
    );
  
}

export default List; 