import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import Settings from './../Settings/Settings'
import MainContent from './../MainContent/MainContent'
import { updateUser, updatePageData } from '../../ducks/reducer';
import Profile from '../Profile/Profile'


class Stream extends Component {

    componentDidMount(){
        console.log('Stream component did mount!')

        console.log(this.props.pageData)
        if(this.props.match) {
                console.log(this.props.match.params.handle)
                this.props.updatePageData(this.props.match.params.handle)
            }
        }

        
        render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
                {this.props.match ? 
                <div className="frame">
                    <Profile />
                </div>
                : <div className="frame">
                    <Sidebar />
                    <MainContent renderer={this.props.renderer}/>
                </div>}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(Stream);