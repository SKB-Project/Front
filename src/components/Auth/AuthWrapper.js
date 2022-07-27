import React, { Component } from 'react';
import styled from 'styled-components';
import { Shadow } from '../../lib/styleutil';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
    ${Shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
    background: #fbfcdb;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: #e9defa;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

class AuthWrapper extends Component{
    render(){
        const {children} = this.props;
        return (
            <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">SWP</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
        )
    }
}
export default AuthWrapper;