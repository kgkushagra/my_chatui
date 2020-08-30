import React, { Component } from 'react'
import ContactsList from './LeftPanel/ContactsList';
import IndividualChat from './RightPanel/IndividualChat';
import classes from './UI.module.css';
import {isHost} from '../generateFakeData';

export default class UI extends Component {
    constructor(props){
        super(props);
        this.sContact=this.sContact.bind(this);
    }
    state={
        users:{
            Host:{
                id:isHost.id,
                name:isHost.name,
                img:isHost.avatar,
            },

            
        },
        userName:null,
        userAvatar:null
    };
    sContact=(userName,userAvatar)=>{
        this.setState({
            userName:userName,
            userAvatar:userAvatar
        });
       // console.log(userAvatar);
    }
    
    

    
    render() {
       // console.log(contacts);

        return (
            <div className={classes.Layout}>

                <div className={classes.LeftPanel}>
                     <ContactsList users={this.state.users} sContact={this.sContact}/>
                     
                </div>
                <div className={classes.RightPanel}>
                    <IndividualChat userName={this.state.userName} userAvatar={this.state.userAvatar}/>
                </div>

                
            </div>
        );
    }
}
