import React, { Component } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';
import { withCookies } from "react-cookie";
import { getCookie,setCookie } from '../../cookie/Cookies';
import { Link } from 'react-router-dom';

class EachListView extends Component {
    constructor(props){
      super(props);
      const board_id = parseInt(this.props.match.params.data,10);
      const cookie_name = 'board_' + board_id;
      this.state = {
          data : {},
          nexttitle : "",
          prevtitle : "",
          nextId: 0,
          prevId: 0,
          date : "",
          cookie_name : getCookie(cookie_name) || "",
          reply_data : [],
          reply_num : 0
      }
    }

    handleSetCookie()  { // 조회수 중복을 막기 위한 쿠키설정함수
        const userdata = storage.get('tokens');
        const user = userdata.userId;
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);
        const board_id = parseInt(this.props.match.params.data,10);
        const cookie_name = 'board_' + board_id + user;
        const exist_cookie = getCookie(cookie_name);
        // console.log(expires);
        if(!exist_cookie){ // 쿠키로 조회수 중복 금지 다만 한 회원에만 한해야 함
          console.log(exist_cookie, "! , 쿠키가 존재하지 않습니다!");
          setCookie(cookie_name, true, expires);
          this.setState({ cookie_name: getCookie(cookie_name) });
        }
    };

    componentDidMount() {
        this.fetchData();
        this.fetchNextData();
        this.fetchPrevData();
        this.addViewCnt();
        this.handleSetCookie();
        this.getReplyData();
      };

    fetchData = async () => {
        const tokens = storage.get('tokens');
        const accessToken = tokens.tokenDto.accessToken;
        // console.log(accessToken);
        
        const board_id = parseInt(this.props.match.params.data,10);
        // console.log(board_id);
        // console.log(typeof(board_id));

        try {
            const data_list = await axios(process.env.REACT_APP_DB_HOST +`/post/${board_id}/get`, {
                method : 'GET',
                headers: { 'Access_Token': accessToken },
                withCredentials: true,
            });
            // console.log(data_list.data.data);
            // console.log(data_list.data.data.dateTime);
            const date = data_list.data.data.dateTime.slice(0, 10) + ' ' + data_list.data.data.dateTime.slice(11, 16);
            return this.setState({ data : data_list.data.data, date : date });

        } catch (e) {
            console.log(e);
        }
    };
    fetchPrevData = async () => {
      const tokens = storage.get('tokens');
      const accessToken = tokens.tokenDto.accessToken;
      // console.log(accessToken);
      
      const board_id = parseInt(this.props.match.params.data,10);
      // console.log(board_id);
      // console.log(typeof(board_id));


      try {
          const data_list = await axios(process.env.REACT_APP_DB_HOST+`/post/prev/${board_id}/get`, {
              method : 'GET',
              headers: { 'Access_Token': accessToken },
              withCredentials: true,
          });
          // console.log(data_list.data.result);
          // console.log(data_list.data.data.dateTime);
          //console.log(data_list.data.data);
          const datas = data_list.data.data;
          if(data_list.data.result === "SUCCESS"){
            return this.setState({ prevtitle : datas.title, prevId : datas.postId});
          }

      } catch (e) {
          this.setState({ prevtitle : "첫 글", prevId : 0});
          console.log(e);
      }
  };
  fetchNextData = async () => { // 다음 글 받아와서 넘어갈 수 있도록
    const tokens = storage.get('tokens');
    const accessToken = tokens.tokenDto.accessToken;
    // console.log(accessToken);
    
    const board_id = parseInt(this.props.match.params.data,10);
    // console.log(board_id);
    // console.log(typeof(board_id));

    try {
        const data_list = await axios(process.env.REACT_APP_DB_HOST+`/post/next/${board_id}/get`, {
            method : 'GET',
            headers: { 'Access_Token': accessToken },
            withCredentials: true,
        });
        //console.log(data_list.data.data);
        const datas = data_list.data.data;
        if(data_list.data.result === "SUCCESS"){
          return this.setState({ nexttitle : datas.title, nextId : datas.postId});
        }

    } catch (e) {
        this.setState({ nexttitle : "마지막 글", nextId : 0});
        console.log(e);
    }
};

    addViewCnt = async () => { // 조회수 구현
        const tokens = storage.get('tokens');
        const user = tokens.userId;
        // console.log(tokens);
        const accessToken = tokens.tokenDto.accessToken;
       //  console.log(accessToken);

        const board_id = parseInt(this.props.match.params.data,10);
        // console.log(board_id);
        // console.log(typeof(board_id));
        const cookie_name = 'board_' + board_id + user;
        const exist_cookie = getCookie(cookie_name);
        // console.log(exist_cookie);
        if(!exist_cookie){
          console.log(exist_cookie, "! , 쿠키가 존재하지 않습니다!");
          try {
            const viewCount = await axios(process.env.REACT_APP_DB_HOST+`/post/${board_id}/viewCount`, {
                method : 'POST',
                headers: { 'Access_Token': accessToken },
                withCredentials: true,
            });
            console.log(viewCount.data);

        } catch (e) {
            console.log(e);
        }
      }
    }
    removeView = async () => {
      if(window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {
  
      }
    }

    addReply = async () => { // 댓글 작성
      let reply = document.getElementsByName('write_reply')[0].value.trim();
      reply = reply.replace(/(\n|\r\n)/g, '<br>');
      console.log(reply);
      const tokens = storage.get('tokens');
      // console.log(tokens);
      const accessToken = tokens.tokenDto.accessToken;
      // console.log(accessToken);
      const board_id = parseInt(this.props.match.params.data,10);
      // console.log(board_id);
      // console.log(typeof(board_id));
      if(reply === "" || reply.length === 0) {
        document.getElementsByName('write_reply')[0].focus()
        document.getElementsByName('write_reply')[0].value = reply;
  
        return alert('댓글을 입력해주세요.');
  
      } else if(reply.split('<br>').length > 5) {
        return alert('댓글 내용이 5줄 이상 초과되었습니다.')
      }
      const data = {postId : board_id,  content : reply}
      console.log(data);

      try {
        const response = await axios(process.env.REACT_APP_DB_HOST+`/reply/create`, {
            method : 'POST',
            headers: { 'Access_Token': accessToken },
            data: data,
            withCredentials: true,
        });
        console.log(response.data);
        alert('댓글이 등록되었습니다.');
        const board_id = parseInt(this.props.match.params.data,10);
        window.location.replace(`/home/${this.props.Etype}/view/${board_id}`);
    } catch (e) {
        console.log(e);
    }
  }

  getReplyData = async()=> { // 전체 댓글의 데이터를 받아옴(해당 게시물의 Id에 해당하는)
    const tokens = storage.get('tokens');
      // console.log(tokens);
    const accessToken = tokens.tokenDto.accessToken;
    const postId = parseInt(this.props.match.params.data,10);

    try {
      const response = await axios(process.env.REACT_APP_DB_HOST+`/replies/${postId}`, {
          method : 'GET',
          headers: { 'Access_Token': accessToken },
          withCredentials: true,
      });
      console.log("reply datas: ", response.data.data);
      console.log("reply data length: ", response.data.data.length);
      this.setState({ reply_data : response.data.data, reply_num : response.data.data.length});

  } catch (e) {
      console.log(e);
  }

  }

  removeReply = async(replyId)=>{ // 댓글에 대한 Id를 받아 삭제
    if(window.confirm('해당 댓글을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {
      const tokens = storage.get('tokens');
      const accessToken = tokens.tokenDto.accessToken;
      console.log(replyId);
      try {
        const response = await axios(process.env.REACT_APP_DB_HOST+`/reply/${replyId}/delete`, {
            method : 'DELETE',
            headers: { 'Access_Token': accessToken },
            withCredentials: true,
        });
        console.log(response.data.data);
        const board_id = parseInt(this.props.match.params.data,10);
        window.location.replace(`/home/${this.props.Etype}/view/${board_id}`);

    } catch (e) {
        console.log(e);
    }
  }
}

render(){
    const { data, date, prevtitle, nexttitle, prevId, nextId,reply_data, reply_num } = this.state;
    const { pre, next } = this.state;
    const tokens = storage.get('tokens');
    const logInUserId = tokens.userId;
    const board_id = parseInt(this.props.match.params.data,10);
    const { addReply } = this;
    // console.log(this.props.Etype);
    // if(data.createdPostUserId !== undefined)
    // {
    //   console.log("your Id : ",logInUserId, "/ ", "createdPostUserId : ", data.createdPostUserId)
      
    // }
    return (
        <div className='Write'>
          {data
          ? <div>
            { logInUserId == data.createdPostUserId ?
                  <div className='write_option_div'>
                    <Link to={{
                      pathname: `/home/${this.props.Etype}/write/modify/${board_id}`,
                      state: {
                        board_id: board_id
                      }}}> 
    {/* Link로 props를 전달하기 위함 -> this.props.location.state에서 사용 */}
                        <input type='button' value='수정'/>
                    </Link>
                    <input type='button' value='삭제' onClick={() => this.removeView()}/>
                  </div>
                :null
              }

                <div className='top_title'>
                  <input type='text' id='title_txt' name='title' defaultValue={data.title} readOnly/>

                  <div className='date_div'>
                    {date}
                  </div>
                </div>
                
                <div dangerouslySetInnerHTML={ { __html : data.content }}>
                </div>

                <div className='other_div'>
                  <div className='view_pre_next_div view_pre'> 
                  {prevId != 0 ? <Link to={'/home/' + this.props.Etype + '/view/' + prevId} >{prevtitle}</Link>
                  : <p>{prevtitle}</p>
                  }
                      <img src={pre}/>
                  </div>
                  <div className='view_pre_next_div view_next'>
                    {nextId != 0 ? <Link to={'/home/' + this.props.Etype + '/view/' + nextId} >{nexttitle}</Link>
                  : <p>{nexttitle}</p>
                  }
                      <img src={next}/>
                  </div>
                </div>
                <div className='Reply_div'>
                  <h4> 댓글 </h4>

                  <div className='Reply_write'>
                        <textarea rows='3'placeholder='100자 이내의 글을 입력해주세요.'
                                  maxLength='100' name='write_reply'>
                        </textarea>
                        <input type='button' value='등록' id='reply_submit_button' 
                        onClick = {() => addReply()}/>
                  </div>
                  <div className='Reply_list'>
                    {reply_data.length > 0 && reply_num > 0
                      ? <div> 
                          <h5> {reply_num} 개의 댓글이 있습니다. </h5>

                          <div className='reply_list_div'>
                            {reply_data.map( (it) => {
                              return(
                                <div className='reply_list_gird'> 
                                  <div className='reply_list_id'> {it.userName} </div>
                                  <div className='reply_list_contents'> {it.content} </div>
                                  <div className='reply_list_date'> 
                                    {(logInUserId === it.userId)
                                    // 현재 로그인한 아이디와 댓글을 단 아이디가 같을 경우
                                    ? <input type='button' value='삭제' className='reply_delete_btn'
                                    onClick={() => this.removeReply(it.replyId)}/>
                                    : null}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                                
                      : <h5> 작성된 댓글이 없습니다. </h5>}
                  </div>
                </div>

            </div>
  
          : null}
        </div>
    );
}
}

export default withCookies(EachListView);