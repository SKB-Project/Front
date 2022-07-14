import React , {Component} from 'react';
//import { createGlobalStyle } from 'styled-components';
//import Templates from './components/Templates';
import { Route } from 'react-router-dom';
import { Home, Auth } from './pages';
import HeaderContainer from './containers/Base/HeaderContainer';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    background-color: #fbfcdb;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

class App extends Component {
  render() {
      return (
          <div>
            <Header>
                <HeaderContainer></HeaderContainer>
            </Header>
              <Route path="/home" component={Home}/>
              <Route path="/auth" component={Auth}/>
          </div>
      );
  }
}

export default App;