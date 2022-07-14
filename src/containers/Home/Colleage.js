import React, { Component } from 'react';
import styled from 'styled-components';
import UserHeaderContainer from '../Base/UserHeaderContainer';
const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;
class Colleage extends Component {

    render() {
        return (
            <div>
                <Header>
                    <UserHeaderContainer></UserHeaderContainer>
                </Header>
            </div>
        );
    }
}

export default Colleage;