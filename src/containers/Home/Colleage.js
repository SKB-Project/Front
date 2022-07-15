import React, { Component } from 'react';
import { Community, CommunityHeader } from '../../components/Home';
class Colleage extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div>
                <div>
                    <CommunityHeader type = '수능' Etype = 'ColleageTest'/>
                </div>
                <div>
                    <Community type = '수능' Etype = 'ColleageTest'/>
                </div>
            </div>
        );
    }
}

export default Colleage;