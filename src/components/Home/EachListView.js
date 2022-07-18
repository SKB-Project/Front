import React, { Component } from 'react';
import './Community.css';
import axios from 'axios';
import storage from '../../lib/storage';

class EachListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {},
            date : ""
        }
    }
    componentDidMount() {
        this.fetchData();
      };

    fetchData = async () => {
        const tokens = storage.get('tokens');
        const accessToken = tokens.accessToken;
        console.log(accessToken);
        
        const data = parseInt(this.props.match.params.data,10);
        console.log(data);
        console.log(typeof(data));

        try {
            const data_list = await axios(`/post/${data}/get`, {
                method : 'GET',
                headers: { 'Access_Token': accessToken },
            });
            console.log(data_list.data.data);
            console.log(data_list.data.data.dateTime);
            const date = data_list.data.data.dateTime.slice(0, 10) + ' ' + data_list.data.data.dateTime.slice(11, 16);
            return this.setState({ data : data_list.data.data, date : date });

        } catch (e) {
            console.log(e);
        }
    };

  

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
              
              <div>
                <textarea id='content_txt' name='contents' defaultValue={data.content} readOnly></textarea>
              </div>
            </div>
          : null}
        </div>
    );
}
}

export default EachListView;