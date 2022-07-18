import React, {Component} from "react";
import './Community.css';
// import CommunityHome from "./CommunityHome";
import Write from "./Write";
import RightWrite from "./RightWrite";
import { Route } from "react-router-dom";
import List from "./List";
import EachListView from "./EachListView";

class Community extends Component{
    // constructor(props){
    //     super(props)
    // }
    render() {
        return(
            <div>
                <div className='Mains'>
                    <div id='Mains-left'>
                    </div>
                    <div>
                        <Route path={'/home/' + this.props.Etype} 
                        render = {() => <List type = {this.props.type} Etype = {this.props.Etype}/> } exact/>

                        <Route path={'/home/' + this.props.Etype+'/write'} component={Write} />
                        <Route path={'/home/' + this.props.Etype+'/view/:data'} component={EachListView} />
                    </div>
                    <div id='Mains-right'>
                        <Route path={'/home/' + this.props.Etype+'/write'} 
                        render = {() => <RightWrite type = {this.props.type}/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;