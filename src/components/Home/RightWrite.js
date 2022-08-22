import React, { Component } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';
import { Link } from 'react-router-dom';

class RightWrite extends Component {
  // constructor(props) {
  //   super(props)
  // }
  submitBoard = async () =>{
    const title = document.getElementsByName('title')[0].value.trim();
    const content = this.props.content;
    if(title === ""){
      return alert('제목을 입력해주세요.');
    } else if(content === ""){
      return alert('내용을 입력해주세요.');
    }
   
    const tokens = storage.get('tokens');
    const accessToken = tokens.tokenDto.accessToken;
    console.log(accessToken);
    const data = {type : this.props.type, title : title, content : content}
    console.log(data);

    try{
      const res = await axios(process.env.REACT_APP_DB_HOST +'/post/create', {
        method : 'POST',
        data : data,
        headers: { 'Access_Token': accessToken },
        withCredentials: true,
      })
      // console.log(res.data);
      return alert('게시글 작성 완료');
    }
    catch(e){
      console.log(e);
    }
    
  }

  editBoard = async () =>{
    const title = document.getElementsByName('title')[0].value.trim();
    const content = this.props.content;
    const board_id = this.props.location.state.board_id;
    console.log(board_id);
    console.log(title);
    console.log(content);
    if(title === ""){
      return alert('제목을 입력해주세요.');
    } else if(content === ""){
      return alert('내용을 입력해주세요.');
    }
  
    const tokens = storage.get('tokens');
    const accessToken = tokens.tokenDto.accessToken;
    
    const data = {type : this.props.type, title : title, content : content}
    console.log(data);

    try{
      const res = await axios(process.env.REACT_APP_DB_HOST +`/post/${board_id}/edit`, {
        method : 'PUT',
        data : data,
        headers: { 'Access_Token': accessToken },
        withCredentials: true,
      })
      console.log(res.data);
      return alert('게시글 수정 완료');
    }
    catch(e){
      console.log(e);
    }
    
  }
  render() {
    const { submitBoard, editBoard } = this;
    console.log(this.props);
    
    let data = this.props.match;
    if(data){ // url에 :data 가 있는지 유무를 확인
      // => :data는 modify/:data에 존재하므로 있다면 게시글 수정임
      data = data.params.data;
    }

    let state = this.props.location;
    if(state){
      state = state.state;
    }

    return (
        <div>
          <div id='post_submit'>
          <button onClick={submitBoard}>
                  <Link to={'/home/' + this.props.Etype}>게시글 작성</Link>
                </button> 
            {
               !data ? 
               <button onClick={submitBoard}>
                  <Link to={'/home/' + this.props.Etype}>게시글 작성</Link>
                </button> 
                :
                <button onClick={editBoard}>
                  <Link to={'/home/' + this.props.Etype + '/view/' + state.board_id}>게시글 수정</Link>
                </button> 
            }
          </div>
        </div>
    );
  }
}

export default RightWrite;