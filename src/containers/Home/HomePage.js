import React, { Component } from 'react';
import styled from 'styled-components';
import { CardLink } from '../../components/Home';

import c from './img/공무원.jpg';
import e from './img/기타.png';
import b from './img/수능.jpg';
import d from './img/취업 준비.jpg';
import a from './img/프로그래밍.png';

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
const Footer = styled.div`
border-top: 1px solid #e4e4e4;
    background-color: #f8f9fa;
    padding: 1rem 0;
    margin: 1rem 0;
`;
const FooterMessage = styled.div`
font-weight: bold;
    color: #545e6f;
    margin: 0.3rem 0.5rem;
`;
const FooterContact = styled.div`
color: #545e6f;
    margin: 1rem 0.5rem;
`;


class HomePage extends Component {
    
    render() {
        return (
            <div>
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
                                to="/home/community/Programming" 
                                img ={a}
                                type = "Programming"
                                format="커뮤니티"
                                title="프로그래밍"
                            />
                            <CardLink 
                                to="/home/community/ColleageTest" 
                                img ={b}
                                type = "Colleage Ability Test"
                                format="커뮤니티"
                                title="수능"
                            />
                            <CardLink 
                                to="/home/community/PublicOfficial" 
                                img ={c}
                                type = "Public Official"
                                format="커뮤니티"
                                title="title"
                            />
                            <CardLink 
                                to="/home/community/Jop" 
                                img ={d}
                                type = "Jop"
                                format="커뮤니티"
                                title="취업 준비"
                            />
                            <CardLink 
                                to="/home/community/Etc" 
                                img ={e}
                                type = "etc"
                                format="커뮤니티"
                                title="기타"
                            />
                        </ClassList>
                        
                    </RoadmapContainer>
                </Inner>
            </Section>
            <Footer>
                <FooterMessage>내일 후회할 일을 오늘 만들지 말자, 주어진 업무는 바로 이루어내자!</FooterMessage>
                <FooterContact>네이버 메일: zed6740@naver.com</FooterContact>
                <FooterContact>구글 메일: zed6740dankook.ac.kr</FooterContact>
            </Footer>
            </div>
        );
    }
}

export default HomePage;