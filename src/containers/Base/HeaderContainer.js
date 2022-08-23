import React, { Component } from 'react';
import Header,{LoginButton, LogoutButton} from '../../components/Base/Header';
import { connect } from 'react-redux';
import storage from '../../lib/storage';
class HeaderContainer extends Component {
    render() {
        const { visible } = this.props;
        if(!visible) return null;
        let tokens = storage.get('tokens');
        if(tokens !== null){
            console.log("tokens : ",tokens);
        }
        return (
            <Header>
                {tokens === null ? <LoginButton/> : <LogoutButton/>} 
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible'])
    }),
    (dispatch) => ({

    })
)(HeaderContainer);