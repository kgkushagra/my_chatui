import React, { Component } from 'react'
import Contact from '../LeftPanel/Contact';
import classes from './../UI.module.css';
import ChatBox from './ChatBox';
import faker from 'faker';
export default class IndividualChat extends Component {
    constructor(props){
        super(props);
        this.inputChat=React.createRef();
    }
   state={
        host:[],
        
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
        const fakeMsg=faker.lorem.sentence();
       const fakeDate=faker.date.recent().toLocaleTimeString();
       console.log(fakeDate)
        return (
            <div className={classes.Chats}>
                <div className={classes.hostChat}>
                    <ChatBox message={chat} date={fakeDate} key="1"/>
                </div>
                <div className={classes.userChats}>
                   <ChatBox message={fakeMsg} date={fakeDate} key="2" />
                </div>
                
                 
            </div>
        
        );
    })
       return(
            <div className={classes.chatUI}>
                <div className={classes.selectedContact}>
                    <Contact userName={this.props.userName} userAvatar={this.props.userAvatar}/>
                </div>
                <div className={classes.chats}>
                    {hostchatRender}
                </div>
                <div className="chatInput">
                    <form onSubmit={chatEnter}>
                        <input placeholder="start chats here"  ref={this.inputChat}/>
                    </form>
                </div>
            </div>
       );
   }

}
