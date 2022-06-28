import React , {Component} from 'react';
import { createGlobalStyle } from 'styled-components';
import Templates from './components/Templates';
import { Route } from 'react-router-dom';
import { Home, Auth } from './pages';
import HeaderContainer from './containers/Base/HeaderContainer';

const GlobalStyle = createGlobalStyle`
   body {
    background: #fbfcdb;
  }
`;
class App extends Component {
  render() {
      return (
          <div>
            <HeaderContainer></HeaderContainer>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
          </div>
      );
  }
}

export default App;