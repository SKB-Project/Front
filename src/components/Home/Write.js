import React, { Component } from 'react';
import './Community.css';

class Write extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    return (
        <div>
            <div className = 'Write'>
                <input type='text' id='title_txt' name='title' placeholder='제목'/>
            </div>

           <div>
                <textarea id='content_txt' name='content' placeholder='내용을 입력하세요.'/> 
            </div>
        </div>
    );
  }
}

export default Write;