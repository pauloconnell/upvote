import React, { Component } from 'react';
import ArrowUpload from '../../icons/arrow-up.svg';
import Plus from '../../icons/plus.svg';
//import  Plus  from '../plus.svg';
//import { arrow-upload } from '../icon/arrow-upload.svg';
//import { Logo } from 'logo.svg';
class Upvote extends Component {



  render() {
    return <div><h2> Upvote component will go here</h2>
        <section>
        Arrow-upload /
        <img src={ArrowUpload} alt="Arrow Upload Icon" />
        Plus
        <img src={Plus} alt="Plus Icon" />
        </section>
        </div>;
  }
}

export default Upvote; // Don’t forget to use export default!