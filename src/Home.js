import React from 'react';
import {Link} from 'react-router'
import './style/home.css'

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        {this.props.children}
      </div>
    )
  }
}

export default Home;
