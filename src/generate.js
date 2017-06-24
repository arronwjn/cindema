import React from 'react'
import './style/generate.css'
import axios from 'axios'


class Generate extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:this.props.id,
      src:''
    }
  }
  componentDidMount(){
    let form = new FormData();
    form.append('cmd','getPic');
    form.append('id',80);
    axios.post('http://runner.kaituocn.com/Web/Index/',form)
    .then(res=>
      {
        console.log(res)
        this.setState({src:res.data.data[0].pic})
      })
  }

  render(){
    let showData=this.props.id
    console.log(this.props.id)
    // this.setState({id:this.props.id})

    return(
      <div className='generate-warp' style={{backgroundImage:`url(http://runner.kaituocn.com/${this.state.src})`}}>
        <img src={`../src/images/${this.props.id}.png`}/>
      </div>
    )
  }
}

export default Generate;
