import React, { Component } from 'react';
import classes from '../UI.module.css';
export default class ChatBox extends Component {
    render() {
        console.log(this.props.message)
        return (
            <div>
                <p>{this.props.message}</p> 
                <div>
                    <span className={classes.date}>{this.props.date}</span>
                    
                </div>
            </div>
        )
    }
}
 