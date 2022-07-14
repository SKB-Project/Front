import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Colleage, Etc, Jop, Programming, Public } from '../containers/Home';
import { HomeWrapper } from '../components/Home';


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Route path="/home/community/Programming" component={Programming}/>
                <Route path="/home/community/ColleageTest" component={Colleage}/>
                <Route path="/home/community/PublicOfficial" component={Public}/>
                <Route path="/home/community/Jop" component={Jop}/>
                <Route path="/home/community/Etc" component={Etc}/>
            </HomeWrapper>
        );
    }
}

export default Home;