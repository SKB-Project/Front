import React, { Component } from 'react';
import { Community, CommunityHeader } from '../../components/Home';

class Jop extends Component {

    render() {
        return (
            <div>
                <div>
                    <CommunityHeader type = '취업준비' Etype = 'Jop'/>
                </div>
                <div>
                    <Community type = '취업준비' Etype = 'Jop'/>
                </div>
            </div>
        );
    }
}

export default Jop;