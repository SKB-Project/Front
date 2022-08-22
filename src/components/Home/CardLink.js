import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ClassCard = styled.div`
    &:hover{
        box-shadow: 10px 10px 10px 0px rgba(25, 42, 70, 0.2);
        transform: translate(0, -12px);
    };
    width: 16%;
  /* box-shadow: 블럭에 그림자를 적용하는 CSS 기능
     https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow 
     offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 10px 10px 10px -5px rgba(25, 42, 70, 0.2);
    border-radius: 8px;
    margin: 0 24px;
    transition: 0.8s;
  /* IE11 에서는 flex 설정시, 디폴트로 flex 아이템들에 고정 너비를 무시 */
    flex-shrink: 0;
    background-color: #fff;
`;
const ClassImage = styled.img`
    width: 100%;
    height: 40px;
    background-image: linear-gradient(150deg, #428cd4, #ff9cda);
  /* border-radius: 블럭 모서리를 둥글게 하는 CSS 기능
     top-left | top-right | bottom-right | bottom-left */
    border-radius: 8px 8px 0 0;
    object-fit: cover;
`;
const ClassContainer = styled(Link)`
    width: 100%;
    padding: 0.5rem 1rem 1rem 1rem;
    display: grid;
`;
const ClassSkill = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: center;
`;
const ClassType = styled.div`
text-align: center;
    font-size: 0.9rem;
    color: #949393;
    background-color: #f2f2f2;
`;
const ClassDesc = styled.div`
&:hover{
        color: #2186c4;
    };
    width: 100%;
    color: #545e6f;
    border-radius: 8px;
`;
const ClassTitle = styled.div`
  font-weight: bold;
  color: #545e6f;
  width: 100%;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
`;

const CardLink = ({to, type, title}) => (
        <ClassCard>
            <ClassImage/>
            <ClassContainer to={to}>
                <ClassSkill>
                    <ClassTitle>{title}</ClassTitle>
                </ClassSkill>
            </ClassContainer>
            <ClassDesc>
                    <ClassType>{type}</ClassType>
                </ClassDesc>
        </ClassCard>
);

export default CardLink;