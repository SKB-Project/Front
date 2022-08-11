import React, {Component} from "react";
import './Community.css';
// import CommunityHome from "./CommunityHome";
import Write from "./Write";
import RightWrite from "./RightWrite";
import { Route, Switch } from "react-router-dom";
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
        console.log("title: ", title);
        this.setState({ title : title })
      }
    _getContents = (val) => {
        const content = val.trim();
        console.log("content: ", content);
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
        const {type, Etype} = this.props;
        return(
            <div>
                <div className='Mains'>
                    <div id='Mains-left'>
                    </div>
                    <div>
                        <Route path={'/home/' + Etype} 
                        render = {() => <List type = {type} Etype = {Etype}/> } exact/>
                        <Switch>
                            <Route path={'/home/' + Etype+'/write/modify/:data'} 
                            component={this._withProps(Write, { 
                                _getContents : _getContents, 
                                _getTitles : _getTitles,
                                title : title,
                                content : content
                                })}/>
                            <Route path={'/home/' + Etype+'/write'} 
                            component={this._withProps(Write, { 
                                _getContents : _getContents, 
                                _getTitles : _getTitles,
                                title : title,
                                content : content
                                })}/>
                        </Switch>
                        <Route path={'/home/' + Etype +'/view/:data'} 
                        component={this._withProps(EachListView, { 
                            Etype : Etype,
                            type : type,
                             })}/>
                    </div>
                    <div id='Mains-right'>
                        <Switch>
                            <Route path={'/home/' + Etype+'/write/modify/:data'} 
                            component={this._withProps(RightWrite, { 
                                content :content,
                                Etype : Etype,
                                type : type,
                                 })}
                            />
                            <Route path={'/home/' + Etype+'/write'} 
                            render = {() => <RightWrite Etype = {Etype} type = {type} content = {content}/>}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;