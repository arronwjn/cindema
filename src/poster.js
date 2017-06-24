import React from 'react';
import {Link,hashHistory,browserHistory} from 'react-router'
import './style/poster.css'
import GoMailReply from 'react-icons/lib/go/mail-reply'

class Poster extends React.Component{
  handleclick(){
    hashHistory.push('/')
  }
  render(){
    const posterArr = [
      {
        id:1,
        url:'xiaoguotu2.jpg',
      },{
        id:2,
        url:'xiaoguotu4.jpg',
      },{
        id:3,
        url:'xiaoguotu3.jpg',
      },{
        id:4,
        url:'xiaoguotu1.jpg',
      }
    ]
    return(
      <div className='poster-warp'>
        <GoMailReply className='back' onClick={this.handleclick.bind(this)}/>
        <img src='./src/images/poster2.png' className='poster1'/>
        <div className='poster-list'>
          {
            posterArr.map((item,index)=>(
              <div
                onClick={()=>{
                  hashHistory.push({
                    pathname:'details',
                    query:{
                      id:item.id,
                    }
                  })
                }}
                >
                  <img src={`./src/images/${item.url}`}/>
                </div>
            ))
          }
          {/* <div>
            <img src='./src/images/xiaoguotu4.jpg'/>
          </div>
          <div>
            <img src='./src/images/xiaoguotu3.jpg'/>
          </div>
          <div>
            <img src='./src/images/xiaoguotu1.jpg'/>
          </div> */}
        </div>
        <img src='./src/images/poster3.png' className='poster2'/>
      </div>
    )
  }
}

export default Poster;
