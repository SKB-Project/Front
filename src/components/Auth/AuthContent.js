import React,{Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

class AuthContent extends Component{
    render() {
        const {title, children} = this.props;
        return(
            <div>
             <Title>{title}</Title>
             {children}
            </div>
        )
    }
}

export default AuthContent;