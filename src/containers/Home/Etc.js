import React, { Component } from 'react';
import { Community, CommunityHeader } from '../../components/Home';

class Etc extends Component {

    render() {
        return (
            <div>
                <div>
                    <CommunityHeader type = '기타' Etype = 'Etc'/>
                </div>
                <div>
                    <Community type = '기타' Etype = 'Etc'/>
                </div>
            </div>
        );
    }
}

export default Etc;