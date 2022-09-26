import React, { Component } from 'react';
import { Community, CommunityHeader } from '../../components/Home';

class Public extends Component {

    render() {
        return (
            <div>
                <div>
                    <CommunityHeader type = '공무원' Etype = 'Public'/>
                </div>
                <div>
                    <Community type = '공무원' Etype = 'Public'/>
                </div>
            </div>
        );
    }
}

export default Public;