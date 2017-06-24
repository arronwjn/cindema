import React from 'react';
import './style/home.css'
import {Link} from 'react-router'

class Indexs extends React.Component{
  render(){
    return(
      <div className='cantain'>
        <Link to='poster'>
          <img src='./src/images/button1.png'/>
        </Link>
      </div>
    )
  }
}

export default Indexs;
