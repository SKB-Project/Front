import React, { Component } from 'react';
import styled from 'styled-components';

const Contents = styled.div`
    background: white;
    padding: 2rem;
`;

class HomeWrapper extends Component {
    
    render() {
        const {children} = this.props;
        return (
            <Contents>
                {children}
            </Contents>
        );
    }
}

export default HomeWrapper;