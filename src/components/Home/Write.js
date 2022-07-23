import React, { Component } from 'react';
import { Ckeditor } from '../../inc';
import './Community.css';

class Write extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { _getContents, content } = this.props;

    return (
        <div className = 'Write'>
            <div id = 'Title'>
                <input type='text' id='title_txt' name='title' placeholder='제목'/>
            </div>

           <div>
                {/* <CKEditor/> */}
                <Ckeditor
                _getContents = { _getContents } 
                content = { content }
                />
            </div>
        </div>
    );
  }
}

export default Write;