import React, { Component } from 'react';
import Header,{LoginButton, LogoutButton} from '../../components/Base/Header';
import { connect } from 'react-redux';
import storage from '../../lib/storage';
class HeaderContainer extends Component {
    render() {
        const { visible } = this.props;
        if(!visible) return null;
        // let tokens = storage.get('tokens');
        // const accessToken = tokens.accessToken;
        // console.log(accessToken);
        // if(accessToken != null){

        // }
        return (
            <Header>
                {/* {accessToken === null ? <LoginButton/> : <LoginButton/>} */}
                <LoginButton/>
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