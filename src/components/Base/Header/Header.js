import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Shadow, Media } from '../../../lib/StyleUtil';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${Shadow(1)}
`;

//  배경, 내용 중간 정렬
const ColorBackground = styled.div`
    background: #fbfcdb;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${Media.wide`
        width: 992px;
    `}

    ${Media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: #e9defa;
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, #e9defa, ${oc.cyan[5]});
`;

class Header extends Component{
    render() {
        const {children} = this.props;
        return(
            <Positioner>
            <ColorBackground>
                <HeaderContents>
                    <Logo>SWP</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </ColorBackground>
            <GradientBorder/>
        </Positioner>
        )
    }
}

export default Header;