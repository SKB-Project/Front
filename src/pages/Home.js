import React, { Component } from 'react';
import styled from 'styled-components';
import UserHeaderContainer from '../containers/Base/UserHeaderContainer';
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
                    </RoadmapContainer>
                </Inner>
            </Section>
            </div>
        );
    }
}

export default Home;