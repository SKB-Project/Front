import React, { Component } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';

class RightWrite extends Component {
  // constructor(props) {
  //   super(props)
  // }

  submitBoard = async () =>{
    const title = document.getElementsByName('title')[0].value.trim();
    const content = document.getElementsByName('content')[0].value.trim();
  
    if(title === ""){
      return alert('제목을 입력해주세요.');
    } else if(content === ""){
      return alert('내용을 입력해주세요.');
    }
  
    let tokens = storage.get('tokens');
    const accessToken = tokens.accessToken;
    console.log(accessToken);
    
    const data = {type : this.props.type, title : title, content : content}
    console.log(data);

    try{
      const res = await axios('/post/create', {
        method : 'POST',
        data : data,
        headers: { 'Access_Token': accessToken },
      })
      console.log(res.data);
    }
    catch(e){
      console.log(e);
    }
    
  }


  render() {
    const { submitBoard } = this;
    return (
        <div>
          <div id='post_submit'>
            <button onClick={submitBoard}> 게시글 작성 : {this.props.type}</button>
          </div>
        </div>
    );
  }
}

export default RightWrite;