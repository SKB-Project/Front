import React, { Component } from 'react';
import { Ckeditor } from '../../inc';
import './Community.css';

class Write extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { _getContents, _getTitles,content, title } = this.props;

    console.log(content,",",title)
    return (
        <div className = 'Write'>
            <div id = 'Title'>
                <input type='text' id='title_txt' name='title' placeholder='제목' 
                defaultValue={title} 
                onBlur={() => _getTitles()}/>
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