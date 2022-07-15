import React, { Component } from 'react';
import { Community, CommunityHeader } from '../../components/Home';

class Programming extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div>
                <div>
                    <CommunityHeader type = '프로그래밍' Etype = 'Programming'/>
                </div>
                <div>
                    <Community type = '프로그래밍' Etype = 'Programming'/>
                </div>
            </div>
        );
    }
}

export default Programming;