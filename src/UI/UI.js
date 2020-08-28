import React, { Component } from 'react'
import ContactsList from './LeftPanel/ContactsList';
import IndividualChat from './RightPanel/IndividualChat';
export default class UI extends Component {
    render() {
        return (
            <div>
                <ContactsList/>
                <p>This is ur chat ui</p>
                <IndividualChat/>
            </div>
        );
    }
}
