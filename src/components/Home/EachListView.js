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
          date : "",
          cookie_name : getCookie(cookie_name) || ""
      }
    }

    handleSetCookie()  { // 조회수 중복을 막기 위한 쿠키설정함수
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);
        const board_id = parseInt(this.props.match.params.data,10);
        const cookie_name = 'board_' + board_id;
        const exist_cookie = getCookie(cookie_name);
        if(!exist_cookie){
          console.log(exist_cookie, "! , 쿠키가 존재하지 않습니다!");
          setCookie(cookie_name, true, { expires: expires });
          this.setState({ cookie_name: getCookie(cookie_name) });
        }
    };

    componentDidMount() {
        this.fetchData();
        this.addViewCnt();
        this.handleSetCookie();
      };

    fetchData = async () => {
        const tokens = storage.get('tokens');
        const accessToken = tokens.accessToken;
        // console.log(accessToken);
        
        const board_id = parseInt(this.props.match.params.data,10);
        // console.log(board_id);
        // console.log(typeof(board_id));

        try {
            const data_list = await axios(`/post/${board_id}/get`, {
                method : 'GET',
                headers: { 'Access_Token': accessToken },
            });
            // console.log(data_list.data.data);
            // console.log(data_list.data.data.dateTime);
            const date = data_list.data.data.dateTime.slice(0, 10) + ' ' + data_list.data.data.dateTime.slice(11, 16);
            return this.setState({ data : data_list.data.data, date : date });

        } catch (e) {
            console.log(e);
        }
    };

    addViewCnt = async () => {
        const tokens = storage.get('tokens');
        const accessToken = tokens.accessToken;
        // console.log(accessToken);

        const board_id = parseInt(this.props.match.params.data,10);
        // console.log(board_id);
        // console.log(typeof(board_id));
        const cookie_name = 'board_' + board_id;
        const exist_cookie = getCookie(cookie_name);
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
    const { data, date } = this.state;
    return (
        <div className='Write'>
          {data
          ? <div>

              <div className='top_title'>
                <input type='text' id='title_txt' name='title' defaultValue={data.title} readOnly/>

                <div className='date_div'>
                  {date}
                </div>
              </div>
              
              <div dangerouslySetInnerHTML={ { __html : data.content }}>
              </div>
            </div>
          : null}
        </div>
    );
}
}

export default withCookies(EachListView);