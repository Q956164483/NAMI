import React , {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import ManagerContainer from './ManagerContainer.jsx'
import PokeballLoading from '../containers/PokeballLoaing.js'
import MessageContainer from '../containers/MessageContainer.js'
import InputArea from './InputArea.jsx'
import Header from './Header.jsx'
import LeftPaneHeader from '../containers/LeftPaneHeader.js'
import MessageHeader from '../containers/MessageHeader.js'
import ActiveList from '../containers/ActiveList.js'
import LeftManager from '../containers/LeftManager.js'
import RightManager from '../containers/RightManager.js'
import Welcome from './Welcome.jsx'
import VideoCtrl from './VideoCtrl.jsx'
import config from '../config/config.js'
import '../less/Layout.less'

import ImageExpression from '../containers/ImageExpression.js'


function Layout(props){
    const videoCtrlState = props.videoCtrlState;
    const videoStyle = { display: videoCtrlState ? 'none' : 'flex' }
    return (
        <div className = 'Layout-wrapper'>
            {props.children}
            <div className= 'Layout-video' style = {videoStyle}>
                <video src = {config.videoLink} controls = 'controls'>
                    your browser does not support the video tag
                </video>
            </div>
            <VideoCtrl videoCtrlState = {videoCtrlState}/>
            <PokeballLoading />
            <div className = 'Layout-container'>
                <div className = 'manager-container'>
                    <span className = 'manager-one '> <LeftManager /> </span>
                    <span className = 'manager-two '></span>
                    <span className = 'manager-three '> <RightManager /></span>
                </div>
                <span className = {`pane-one pane-one-${props.menuState ? 'hidden' : 'show'}`}>
                    <LeftPaneHeader />
                    <ActiveList />
                </span>
                <span className = {props.showRightManager?'pane-three chat-area':'pane-two chat-area'}>
                    {
                        !props.curRoom ? 
                        <Welcome /> :
                        <div>
                            <MessageHeader/>
                            <MessageContainer />
                            <InputArea />
                            {props.showExpression?<ImageExpression />:null}
                        </div>
                    }
                </span>
            </div>
        </div>
    );
}

export default Layout;
