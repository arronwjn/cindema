import React from 'react';
import './style/details.css';
import './style/generate.css'
import GoMailReply from 'react-icons/lib/go/mail-reply';
import {browserHistory,hashHistory} from 'react-router';
import axios from 'axios'
import Generate from './generate'
import { Spin, Alert } from 'antd';

class Details extends React.Component{
  constructor(props){
    super(props)
    this.state={
      src:'',
      data:{},
      url:'',
      id:'',
      btn:false
    }

  }
  componentDidMount(){
    const  picid = this.props.location.query.picid
    if (picid) {
      let form = new FormData();
      form.append('cmd','getPic');
      form.append('id',picid);
      axios.post('http://runner.kaituocn.com/Web/Index/',form)
      .then(res=>
        {
          console.log(res)
          //关闭ｔｉｐｓ
          this.setState({url:res.data.data[0].pic,id:res.data.data.id})
        })
    }
  }
  handleUpload(e){
    let src= window.URL.createObjectURL(e.target.files[0])
    this.setState({src:src})
    console.log(e.target.files[0]);
    this.setState({data:e.target.files[0]})
  }
  handleGenerate(e,num){
    let form = new FormData();
    form.append('cmd','uploadPic');
    form.append('pic',this.state.data);
    console.log(this.state.data)
    if(this.state.src===''){
      alert('请上传图片')
    }else{
      //显示ｔｉｐｓ
      this.setState({btn:true})

        axios.post('http://runner.kaituocn.com/Web/Index/',form)
        .then(res=>
          {
            console.log(res)
            //关闭ｔｉｐｓ

            this.setState({url:res.data.data.pic,id:res.data.data.id})
            let id=this.props.location.query.id
            setTimeout(()=>{
              this.setState({btn:false})
              window.location = `/#/details?id=${id}&picid=${this.state.id}`
            },1000)
          })


    }
  }
  render(){
    console.log(this.state.id)
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
    const  showData= this.props.location.query.id
    const  picid= this.props.location.query.picid

    return(
      <div className='warp'>
        <div className='tip' style={{display:this.state.btn?'block':'none'}}>海报生成中</div>
        {picid?
            <div className='generate-warp'  style={{backgroundImage:`url(http://runner.kaituocn.com/${this.state.url})`}}>
              <img src={`./src/images/${showData}.png`}/>
            </div>:
        <div className='poster-warp'>
            {this._showDataOne(showData)}
        </div>}
      </div>

    )
  }
  _showDataOne(id){
    let styles={
      backgroundImage:`url(${this.state.src})`
    }
    console.log(id)
    return(

      <div className='details-warp'>
        <GoMailReply className='back' onClick={()=>hashHistory.go(-1)}/>
        <div className='details-list' id='details' style={styles}>
          <img src={`../src/images/${id}.png`}/>
        </div>
        <div className='button'>
          <button>
            上传图片
            <input type="file" onChange={this.handleUpload.bind(this)}/>
          </button>
          <button onClick={this.handleGenerate.bind(this)}>生成海报</button>
        </div>
      </div>
    )
  }
}

export default Details;
