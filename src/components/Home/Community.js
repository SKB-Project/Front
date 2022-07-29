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
            title : "",
        }
    }
    _getTitles = () => {
        const title = document.getElementsByName('title')[0].value.trim();
        console.log("title", title);
        this.setState({ title : title })
      }
    _getContents = (val) => {
        const content = val.trim();
        console.log("Community", content);
        this.setState({ content : content })
    }
    _withProps = function (Component, props) {
        return function(matchProps) {
          return <Component {...props} {...matchProps} />
        }
      }

    render() {
        const { _getContents,_getTitles } = this;
        const { content,title } = this.state;

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
                            _getTitles : _getTitles,
                            title : title,
                            content : content
                             })}/>
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