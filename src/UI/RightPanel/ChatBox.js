import React, { Component } from 'react'

export default class ChatBox extends Component {
    render() {
        console.log(this.props.message)
        return (
            <div>
                <p>{this.props.message}</p> 
                <div>
                    <span className="date">{this.props.date}</span>
                    
                </div>
            </div>
        )
    }
}
 