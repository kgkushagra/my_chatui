import React, { Component } from 'react'
import ContactsList from './LeftPanel/ContactsList';
import IndividualChat from './RightPanel/IndividualChat';
import classes from './UI.module.css';
import faker from 'faker';
import {isHost,contacts} from '../generateFakeData';
export default class UI extends Component {
    state={
        users:{
            Host:{
                id:isHost.id,
                name:isHost.name,
                img:isHost.avatar,
            },
            
        }
    };
    render() {
        //console.log(this.state.users);

        return (
            <div className={classes.Layout}>

                <div className={classes.LeftPanel}>
                     <ContactsList users={this.state.users}/>
                </div>
                <div className={classes.RightPanel}>
                    <IndividualChat />
                </div>

                
            </div>
        );
    }
}
