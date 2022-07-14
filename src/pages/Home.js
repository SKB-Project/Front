import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Colleage, Etc, Jop, Programming, Public,HomePage } from '../containers/Home';
import { HomeWrapper } from '../components/Home';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() {
        return (
            <div>
            <HomeWrapper>
                <Route path="/home/homepage" component={HomePage}/>
                <Route path="/home/community/Programming" component={Programming}/>
                <Route path="/home/community/ColleageTest" component={Colleage}/>
                <Route path="/home/community/PublicOfficial" component={Public}/>
                <Route path="/home/community/Jop" component={Jop}/>
                <Route path="/home/community/Etc" component={Etc}/>
            </HomeWrapper>
            <Link to = "/home/homepage">Go to HomePage</Link>
            </div>
            
            

        );
    }
}

export default Home;