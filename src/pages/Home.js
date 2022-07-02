import React, { Component } from 'react';
import styled from 'styled-components';
import UserHeaderContainer from '../containers/Base/UserHeaderContainer';
import CardLink from '../components/Auth/CardLink';

import c from './img/공무원.jpg';
import e from './img/기타.png';
import b from './img/수능.jpg';
import d from './img/취업 준비.jpg';
import a from './img/프로그래밍.png';

const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;
// const HeaderContainer = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// `;


const Section = styled.section`
padding-top: 40px;
width: 100%;
background-color: #fff;
position: relative;
`;
const Main = styled.section`
    height: 580px; /* 화면 이미지 고정 */
    background-image: url("https://cdnb.artstation.com/p/assets/images/images/038/335/487/original/mathis-juhel-algue.gif");
    background-size: cover;
    background-position: center ; /* 이미지 위치를 살짝 위로 올리기 위한 position 설정 */
    background-repeat: no-repeat;
    z-index: 1;
`;
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(90, 90, 90);
    opacity: 0.8;
    z-index: 2;
    margin-top: 60px;
`;
const Inner = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto; 
    padding: 0rem 2rem; 
    overflow: hidden; 
`;
const TitleContainer = styled.div`
    padding-top: 170px;
    padding-bottom: 100px;
`;
const Title = styled.div`
    padding-left: 70px ;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 2rem;
`;
const Message = styled.div`
    padding-left: 70px ;
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    line-height: 2rem;
`;

const RoadmapContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`;
const RoadmapTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const RoadmapTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    color: #545e6f;
`;
const ArrowContainer = styled.div`
    display: flex;
`;
const ClassList = styled.div`
display: flex;
list-style: none;
padding: 1rem 0;
margin: 0;
overflow: none;
`;
// const ClassCard = styled.div`
//     &:hover{
//         box-shadow: 10px 10px 10px 0px rgba(25, 42, 70, 0.2);
//         transform: translate(0, -5px);
//     };
//     width: 240px;
//   /* box-shadow: 블럭에 그림자를 적용하는 CSS 기능
//      https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow 
//      offset-x | offset-y | blur-radius | spread-radius | color */
//     box-shadow: 10px 10px 10px -5px rgba(25, 42, 70, 0.2);
//     border-radius: 8px;
//     margin: 0 10px;
//     transition: 0.4s;
//   /* IE11 에서는 flex 설정시, 디폴트로 flex 아이템들에 고정 너비를 무시 */
//     flex-shrink: 0;
// `;
// const ClassImage = styled.img`
//     max-width: 240px;
//     max-height: 200px;
//   /* border-radius: 블럭 모서리를 둥글게 하는 CSS 기능
//      top-left | top-right | bottom-right | bottom-left */
//     border-radius: 8px 8px 0 0;
// `;
// const ClassContainer = styled(Link)`
//     width: 100%;
//     padding: 0.5rem 1rem 1rem 1rem;
// `;
// const ClassSkill = styled.div`
//     display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const ClassType = styled.div`
//     font-size: 0.9rem;
//   color: #949393;
// `;
// const ClassFormat = styled.div`
//     font-size: 0.9rem;
//   color: #fff;
//   background-color: #0d47a1;
//   padding: 0.2rem;
// `;
// const ClassDesc = styled.div`
// &:hover{
//         color: #2186c4;
//     };
//     width: 100%;
//     margin-top: 1rem;
//     color: #545e6f;
// `;
// const ClassTitle = styled.div`
//     font-weight: bold;
//   color: #545e6f;
//   width: 100%;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   margin-bottom: 0.5rem;
// `;
// const ClassDetail = styled.div`
//     font-size: 0.9rem;
//     color: #545e6f;
//     line-height: 1.5rem;
// `;

class Home extends Component {
    
    render() {
        return (
            <div>
                <Header>
                    <UserHeaderContainer></UserHeaderContainer>
                </Header>
             <Main>
                <MainContainer>
                    <Inner>
                        <TitleContainer>
                            <Title>
                                Study With Everyone!
                            </Title>
                            <Message>
                                혼자하는 공부에 지치셨나요?
                                <br/>
                                팀 프로젝트를 시작하려 하시나요?
                                <br/>
                                자신과 같은 분야에 매진하는 사람들을 만나보세요!
                            </Message>
                        </TitleContainer>
                    </Inner>
                </MainContainer>
            </Main>
            <Section>
                <Inner>
                    <RoadmapContainer>
                        <RoadmapTitleContainer>
                            <RoadmapTitle>
                                Select Study Type
                            </RoadmapTitle>
                            <ArrowContainer>

                            </ArrowContainer>
                        </RoadmapTitleContainer>
                        <ClassList>
                            <CardLink 
                                to="/auth/register" 
                                img ={a}
                                type = "Programming"
                                format="커뮤니티"
                                title="프로그래밍"
                                detail="프로그래밍분야에 발담근 개발자들의 장소"
                            />
                            <CardLink 
                                to="/auth/register" 
                                img ={b}
                                type = "Colleage Ability Test"
                                format="커뮤니티"
                                title="수능"
                                detail="수능을 준비하는 학생들의 장소"
                            />
                            <CardLink 
                                to="/auth/register" 
                                img ={c}
                                type = "Public Official"
                                format="커뮤니티"
                                title="title"
                                detail="공무원을 준비하는 공시생들의 장소"
                            />
                            <CardLink 
                                to="/auth/register" 
                                img ={d}
                                type = "Jop"
                                format="커뮤니티"
                                title="취업 준비"
                                detail="취업 준비를 하고있는 취준생들의 장소"
                            />
                            <CardLink 
                                to="/auth/register" 
                                img ={e}
                                type = "etc"
                                format="커뮤니티"
                                title="기타"
                                detail="기타 잡다한 이야기를 나누는 장소"
                            />
                        </ClassList>
                        
                    </RoadmapContainer>
                </Inner>
            </Section>
            </div>
        );
    }
}

export default Home;