import React, { Component } from 'react'
import Contact from '../LeftPanel/Contact';
import classes from './../UI.module.css';
import ChatBox from './ChatBox';
export default class IndividualChat extends Component {
    constructor(props){
        super(props);
        this.inputChat=React.createRef();
    }
   state={
        host:[],
        users:{},
   };

   

   render(){
    
    const chatEnter=(event)=>{
        event.preventDefault();
        
        const ip=(this.inputChat.current.value);
       this.setState({
           host:this.state.host.concat(ip)
       });

    }
    console.log(this.state.host);

    const hostChat=this.state.host;
    const hostchatRender=hostChat.map((chat)=>{
        return <ChatBox message={chat}/>
    })
       return(
            <div>
                <div className="selectedContact">
                    <Contact userName={this.props.userName} userAvatar={this.props.userAvatar}/>
                </div>
                <div className="chats">
                    {hostchatRender}
                </div>
                <div className="chatInput">
                    <form onSubmit={chatEnter}>
                        <input placeholder="enter"  ref={this.inputChat}/>
                    </form>
                </div>
            </div>
       );
   }

}
