import React, { Component } from 'react'
import ContactsList from './LeftPanel/ContactsList';
import IndividualChat from './RightPanel/IndividualChat';
import classes from './UI.module.css';
export default class UI extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <ContactsList/>
                <p>This is ur chat ui</p>
                <IndividualChat/>
            </div>
        );
    }
}
