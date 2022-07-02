import React, { Component } from 'react';
import Header,{LogoutButton} from '../../components/Base/Header';
import { connect } from 'react-redux';
class UserHeaderContainer extends Component {
    render() {
        const { visible } = this.props;
        if(!visible) return null;

        return (
            <Header>
                <LogoutButton/>
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
)(UserHeaderContainer);