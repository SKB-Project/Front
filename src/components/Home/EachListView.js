import React, { Component } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';
import { withCookies } from "react-cookie";
import { getCookie,setCookie } from '../../cookie/Cookies';

class EachListView extends Component {
    constructor(props){
      super(props);
      const board_id = parseInt(this.props.match.params.data,10);
      const cookie_name = 'board_' + board_id;
      this.state = {
          data : {},
          nexttitle : "",
          prevtitle : "",
          date : "",
          cookie_name : getCookie(cookie_name) || ""
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
        console.log(expires);
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
          console.log(data_list.data.data.title);
          if(data_list.data.result === "SUCCESS"){
            return this.setState({ prevdata : data_list.data.data.title});
          }

      } catch (e) {
          console.log(e);
      }
  };
  fetchNextData = async () => {
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
        console.log(data_list.data.data.title);
        // console.log(data_list.data.data.dateTime);
        if(data_list.data.result === "SUCCESS"){
          return this.setState({ nextdata : data_list.data.data.title});
        }

    } catch (e) {
        console.log(e);
    }
};

    addViewCnt = async () => {
        const tokens = storage.get('tokens');
        const user = tokens.userId;
        console.log(tokens);
        const accessToken = tokens.tokenDto.accessToken;
        console.log(accessToken);

        const board_id = parseInt(this.props.match.params.data,10);
        // console.log(board_id);
        // console.log(typeof(board_id));
        const cookie_name = 'board_' + board_id + user;
        const exist_cookie = getCookie(cookie_name);
        console.log(exist_cookie);
        if(!exist_cookie){
          console.log(exist_cookie, "! , 쿠키가 존재하지 않습니다!");
          try {
            const viewCount = await axios(`/post/${board_id}/viewCount`, {
                method : 'POST',
                headers: { 'Access_Token': accessToken },
            });
            console.log(viewCount.data);

        } catch (e) {
            console.log(e);
        }
      }
    }
  

render(){
    const { data, date, prevtitle, nexttitle } = this.state;
    const { pre, next } = this.state;
    return (
        <div className='Write'>
          {data
          ? <div>
              <div className='write_option_div'>
                <input type='button' value='수정' />
                <input type='button' value='삭제' />
              </div>

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
                    {prevtitle == undefined ? <p>처음 글</p> : prevtitle}
                      <img src={pre}/>
                  </div>
                  <div className='view_pre_next_div view_next'> 
                  {nexttitle == undefined ? <p>마지막 글</p> : nexttitle}
                      <img src={next}/>
                  </div>
                </div>
                <div className='Reply_div'>
                  <h4> 댓글 </h4>

                  <div className='Reply_write'>
                        <textarea rows='3'placeholder='100자 이내의 글을 입력해주세요.'
                                  maxLength='100' name='write_reply'>
                        </textarea>
                        <input type='button' value='등록' id='reply_submit_button'/>
                  </div>
                </div>

            </div>
  
          : null}
        </div>
    );
}
}

export default withCookies(EachListView);