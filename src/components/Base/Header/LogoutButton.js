import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import storage from '../../../lib/storage';

const BorderedButton = styled(Link)`
    font-weight: 600;
    color: ${oc.cyan[6]};
    border: 1px solid ${oc.cyan[6]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: ${oc.cyan[6]};
        color: white;
    }

    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임 */
        transform: translateY(3px);
    }
`;

const logout = () => {
    if(window.confirm('로그아웃 하시겠습니까?\n처음화면으로 돌아갑니다.')){
    let tokens = storage.get('tokens');
    console.log("tokens: ", tokens);
    storage.remove("tokens");
    window.location.replace("/");
    }
  }

 // 로그아웃 버튼 누를 떄 logout api호출하고
 // storage에 담긴 token 삭제 해야함
const LogoutButton = () => (
    <BorderedButton to="/" onClick={logout}>
        로그아웃
    </BorderedButton>
);

export default LogoutButton;