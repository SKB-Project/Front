import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CommunityHeader.css';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 30px;
`;

class CommunityHeader extends Component {

  render() {
    return (
      <Container>
        <div className='header_grid'>
            <div className='acenter'>
                <h5> <Link to={'/home/community/' + this.props.Etype + '/write'}> 포스트 작성 </Link> </h5>
            </div>
            <div className='acenter'>
                <Link className='link_tit' to={'/home/community/' + this.props.Etype}> <h3> 자유게시판 </h3> </Link>
            </div>
        </div>
        </Container>
    );
  }
}

export default CommunityHeader;