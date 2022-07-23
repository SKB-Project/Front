import React, {Component} from "react";
import './Community.css';
// import CommunityHome from "./CommunityHome";
import Write from "./Write";
import RightWrite from "./RightWrite";
import { Route } from "react-router-dom";
import List from "./List";
import EachListView from "./EachListView";

class Community extends Component{
    constructor(props){
        super(props)
        this.state = {
            content : "",
        }
    }
    _getContents = (val) => {
        const content = val.trim();
    
        this.setState({ content : content })
    }
    _withProps = function (Component, props) {
        return function(matchProps) {
          return <Component {...props} {...matchProps} />
        }
      }
    render() {
        const { _getContents } = this;
        const { content } = this.state;

        return(
            <div>
                <div className='Mains'>
                    <div id='Mains-left'>
                    </div>
                    <div>
                        <Route path={'/home/' + this.props.Etype} 
                        render = {() => <List type = {this.props.type} Etype = {this.props.Etype}/> } exact/>

                        <Route path={'/home/' + this.props.Etype+'/write'} component={this._withProps(Write, { 
         _getContents : _getContents, 
         content : content })}/>
                        <Route path={'/home/' + this.props.Etype+'/view/:data'} component={EachListView} />
                    </div>
                    <div id='Mains-right'>
                        <Route path={'/home/' + this.props.Etype+'/write'} 
                        render = {() => <RightWrite type = {this.props.type} content = {content}/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;